USE [OMSA]
GO
/****** Object:  UserDefinedFunction [dbo].[CambiosDePrecio]    Script Date: 18/01/2020 13:27:32 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO



-- =============================================
-- Author:		Mauricio Càrcamo
-- Create date: 06/01/2014
-- Description:	se convierte en tablas los registros de eventos de cambio de precio
-- =============================================
CREATE FUNCTION [dbo].[CambiosDePrecio]
(
	@CODCLIENTE INT,
	@INICIO_Vigencia DATE,
	@Documento VARCHAR(20),
	@Concepto INT
)
RETURNS  DECIMAL(15,2)
AS
BEGIN

	DECLARE @RESULTADO VARCHAR (5000)
	
  
			  
			 DECLARE @TEXTO VARCHAR(5001)
			 DECLARE @REGISTROS INT
			 DECLARE @CONTADOR INT
			 DECLARE @TextoRegistro VARCHAR(100)
			 DECLARE @TABLA TABLE( CodConFac VARCHAR(6),
								   NumDocume VARCHAR(20),
								      ImpAnt DECIMAL(15,2),
								    ImpNuevo DECIMAL(15,2))
			SET @TEXTO = (SELECT COALESCE	((SELECT TOP 1 Descripcion
												FROM vcCliHisEve
											   WHERE CodCliente = @CODCLIENTE
												 AND Fecha > @INICIO_Vigencia
												 AND CodEven = 1),''))
												 

 		     SET @RESULTADO = 0
          
          
            IF LEN(@TEXTO) > 1 
			BEGIN
						 SET @CONTADOR = 1
						 --SET @TEXTO = ' CONC    DOCUMENTO    VALOR ANT   VALOR NUEVO   00015   00010736735          025.00            030.00   00003   00025935216          000.00            000.00   00003   00028152985          140.00            168.00   00003   00045358756          000.00            000.00   00003   00049630695          000.00            000.00   '
						 SET @REGISTROS = (LEN(REPLACE(@TEXTO,' ','_'))-48)/56
						 
						 WHILE @CONTADOR <= @REGISTROS
						 BEGIN
							   SET @TextoRegistro = SUBSTRING(SUBSTRING(@TEXTO,49,LEN(@TEXTO)-48),1 + ((@CONTADOR -1) *56),56)
							   INSERT INTO @TABLA
							   SELECT LTRIM(RTRIM(SUBSTRING(@TextoRegistro,1,5))),
									  LTRIM(RTRIM(SUBSTRING(@TextoRegistro,6,14))),
									  LTRIM(RTRIM(SUBSTRING(@TextoRegistro,20,16))),
									  LTRIM(RTRIM(SUBSTRING(@TextoRegistro,36,18)))
							   WHERE CONVERT(DECIMAL,LTRIM(RTRIM(SUBSTRING(@TextoRegistro,20,16)))) > 0
							   SET @CONTADOR = @CONTADOR +1
						 END
						 
						SET @RESULTADO = COALESCE(	 (SELECT TOP 1 ImpAnt
														FROM @TABLA
													   WHERE CONVERT(INT,@Documento) = CONVERT(INT,NumDocume)
														 AND @Concepto = CodConFac),
													 (SELECT TOP 1 ValorUni
													    FROM vcCliDebAuto
													   WHERE CodCliente = @CODCLIENTE
													     AND CONVERT(VARCHAR,DocNumero)  = @Documento
													     AND CodConFac = @Concepto
													     AND PeriodoInicio = @INICIO_Vigencia) )
											 
											 
			END  
		   
		    IF LEN(@TEXTO) = 0
		    BEGIN
		       SET @RESULTADO =(SELECT TOP 1 ValorUni
		                          FROM vcCliDebAuto
		                         WHERE CodCliente = @CODCLIENTE
		                           AND CONVERT(VARCHAR,DocNumero) = @Documento
		                           AND CodConFac = @Concepto
		                           AND PeriodoInicio = @INICIO_Vigencia)
		    END
	
	RETURN @RESULTADO

END


GO
/****** Object:  UserDefinedFunction [dbo].[CertificadosPorServicio]    Script Date: 18/01/2020 13:27:32 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO



-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date, ,>
-- Description:	<Description, ,>
-- =============================================
CREATE FUNCTION [dbo].[CertificadosPorServicio]
(
	@CodCliente INT,
	@CodGrupConFac INT
)
RETURNS VarChar (40)
AS
BEGIN
	-- Declare the return variable here

	 --!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 --   DECLARE @CodCliente    INT
	--DECLARE @CodGrupConFac INT

 --   SET @CodCliente = 1954
 --   SET @CodGrupConFac = 2


    DECLARE @AcumuladoCertificados VarChar(40) 
    DECLARE @CertificadoActual INT
    SET @AcumuladoCertificados = ''
  
	DECLARE Certificado_cursor CURSOR FOR 

	SELECT vcCliDebAuto.CodClienteCredito
	  FROM vcCliDebAuto
	 WHERE vcCliDebAuto.CodCliente =  @CodCliente
	   AND  @CodGrupConFac = (CASE WHEN vcCliDebAuto.CodConFac IN (101,103,105)
							 	  THEN 1
							 	  WHEN vcCliDebAuto.CodConFac IN (102,104,106,110)
							 	  THEN 2
							 	  WHEN vcCliDebAuto.CodConFac IN (107)
							 	  THEN 3
							 	  WHEN vcCliDebAuto.CodConFac IN (108)
							 	  THEN 4
							 	  WHEN vcCliDebAuto.CodConFac BETWEEN 201 AND 300
							 	  THEN 5
							 	  WHEN vcCliDebAuto.CodConFac IN (359,360,378,379)
							 	  THEN 6
                                  WHEN vcCliDebAuto.CodConFac IN (111)
                                  THEN 7 --Rta Diaria $200
                                  WHEN vcCliDebAuto.CodConFac IN (113,115,117,119)
                                  THEN 8 --100%
                                  WHEN vcCliDebAuto.CodConFac IN (114,116,118,120)
                                  THEN 9 --200%
								  WHEN vcCliDebAuto.CodConFac IN (112)
                                  THEN 10 --Rta Diaria
							 	   END)

	GROUP BY vcCliDebAuto.CodClienteCredito
	ORDER BY vcCliDebAuto.CodClienteCredito
	
    OPEN Certificado_cursor 
	 FETCH NEXT FROM Certificado_cursor INTO @CertificadoActual 
	 WHILE @@FETCH_STATUS = 0                       
	    BEGIN                                       
		SET @AcumuladoCertificados =  /*LTRIM(RTRIM(STR( @CertificadoActual))) + ' ' + LTRIM(RTRIM(@AcumuladoCertificados))*/
								     (CASE WHEN LTRIM(RTRIM(@AcumuladoCertificados)) LIKE LTRIM(RTRIM(STR(@CertificadoActual)))
		                                   THEN LTRIM(RTRIM(@AcumuladoCertificados))
		                                   ELSE LTRIM(RTRIM(@AcumuladoCertificados)) + ' ' + LTRIM(RTRIM(STR(@CertificadoActual)))
		                              END)
		     
		   FETCH NEXT FROM Certificado_cursor INTO @CertificadoActual 
		END                
	 CLOSE Certificado_cursor  
	 DEALLOCATE Certificado_cursor
	 
--	 PRINT @AcumuladoCertificados
	 --!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
	 
	-- Return the result of the function
	RETURN @AcumuladoCertificados

END




GO
/****** Object:  UserDefinedFunction [dbo].[CodeTo128C]    Script Date: 18/01/2020 13:27:32 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- Description: This function will encode the given string to 128c format
CREATE FUNCTION [dbo].[CodeTo128C] 
   (@stringToEncode VARCHAR(100)) 

RETURNS VARCHAR(100) AS
BEGIN

   IF @stringToEncode IS NULL
      RETURN ''
      
   DECLARE @encodedString AS VARCHAR(25),
           @stringLength AS INT
           
   SET @encodedString = ''
   SET @stringLength = LEN(@stringToEncode)

   IF @stringLength > 0
   BEGIN
       -- Add the start Code
       SET @encodedString = CHAR(205)

       DECLARE @checkSumTotal AS INT,
               @iteration AS INT,
               @i AS INT,
               @checkSum AS INT
               
       SET @checkSumTotal = 105
       SET @iteration = 1
       SET @i = 1
       
       WHILE @i < @stringLength
       BEGIN
           DECLARE @currentPair AS INT,
                   @resultPair AS INT,
                   @strCurrentPair AS VARCHAR(2)
           
           -- Get the pairs of numbers 
           SET @strCurrentPair = SUBSTRING(@stringToEncode, @i, 2)
           
           IF ISNUMERIC(@strCurrentPair) <> 1
              RETURN '' 
              
           SET @currentPair = CAST(@strCurrentPair AS INT) 
           
           SET @resultPair = CASE WHEN @strCurrentPair = '00' THEN 32 --else  32 + @currentPair end--32 32 + @currentPair
              --               CASE WHEN @strCurrentPair = '00' THEN 00--32
		                          WHEN @currentPair    <  95  THEN 32 + @currentPair
							      ELSE                             100 + @currentPair
							 END 
           SET @encodedString = @encodedString + CHAR(@resultPair)
           
           
           SET @currentPair = @currentPair * @iteration
           SET @checkSumTotal = @checkSumTotal + @currentPair
           SET @iteration = @iteration + 1
               
           SET @i = @i + 2 -- Increment the step with 2
       END
       
       SET @checkSum = @checkSumTotal % 103
       
       RETURN @encodedString + CHAR(@checkSum + (CASE WHEN @checkSum < 95 THEN 32 ELSE 100 END)) + CHAR(206)
   END
   
   RETURN ''
END
GO
/****** Object:  UserDefinedFunction [dbo].[F_EnviosCobranza]    Script Date: 18/01/2020 13:27:32 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
--select * from F_IngresosConcepto(null,'01/01/2018',null,null)

CREATE FUNCTION [dbo].[F_EnviosCobranza]
( @CuentaContable Varchar(20)  = null, @FechaDesde varchar(20) = null , @ConceptosNoIncluidos varchar(800) = null,@CuentaCaja Varchar(100) = null)

RETURNS 
@gastos TABLE 
(
	importe FLOAT,periodo VARCHAR(10), cuentaCaja VARCHAR(20),Descripción VARCHAR(80)
)
AS
BEGIN

	DECLARE
	@temp TABLE 
	(
		importe FLOAT,periodo VARCHAR(10), cuentaCaja VARCHAR(20),Descripción VARCHAR(80)
	)


	DECLARE @cueCaj VARCHAR(10), @descripcion VARCHAR(100)
	DECLARE cuecaj CURSOR FOR
	SELECT CodVended,NomVended 
	FROM vcVended 
	--WHERE TipoVendedor in ('','Cobrador') and Habilitado = 'Si'
		

	OPEN cuecaj
	FETCH NEXT FROM cuecaj INTO @cueCaj, @descripcion

	WHILE @@fetch_status = 0
	BEGIN

		INSERT INTO @temp 

		SELECT SUM(COALESCE(TotalComprob,0)), 
		       CONVERT(VARCHAR,YEAR(xgPeriodos.Dia)) + '-' + RIGHT('0' + CONVERT(VARCHAR,MONTH(xgPeriodos.Dia)),2),
		       @cueCaj,@descripcion
		FROM xgPeriodos   
		LEFT JOIN vmComCab ON xgPeriodos.Dia = vmComCab.FecComprob AND vmComCab.DebeHaber = 'Debe' 
		JOIN vcDefCom ON vmComCab.CodComVta = vcDefCom.CodDefCom 
		AND  vcDefCom.AfeCtaCte = 'Si' 
		LEFT JOIN xmGenLot ON vmComCab.RtoA_IdCompro = xmGenLot.IdLotGenCom 
		JOIN vcClient ON vmComCab.CodCliente = vcClient.CodCliente AND CONVERT(VARCHAR,vcClient.CodCobrador)   =  LTRIM(RTRIM(@cueCaj))
		WHERE TipoPeriodo = 'Dia' 
		AND CONVERT(VARCHAR(6),xgPeriodos.Dia,112) BETWEEN CONVERT(VARCHAR(6),DATEADD(MM,0,@FechaDesde),112)
		AND  CONVERT(VARCHAR(6),DATEADD(MM,11,@FechaDesde),112)
		GROUP BY CONVERT(VARCHAR,YEAR(xgPeriodos.Dia)) + '-' + RIGHT('0' + CONVERT(VARCHAR,MONTH(xgPeriodos.Dia)),2)
		ORDER BY CONVERT(VARCHAR,YEAR(xgPeriodos.Dia)) + '-' + RIGHT('0' + CONVERT(VARCHAR,MONTH(xgPeriodos.Dia)),2)

		FETCH NEXT FROM cuecaj into @cueCaj, @descripcion

	END
	CLOSE cuecaj
	DEALLOCATE cuecaj

	INSERT INTO @gastos
    SELECT sum(importe),periodo,cuentaCaja,Descripción
    FROM @temp
    GROUP BY periodo,cuentaCaja,Descripción

	RETURN 
END

GO
/****** Object:  UserDefinedFunction [dbo].[F_GastosConcepto2]    Script Date: 18/01/2020 13:27:32 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE FUNCTION [dbo].[F_GastosConcepto2]

( @CuentaContable_ Varchar(20)  = null, @FechaDesde varchar(20) = '01/05/2018' , @ConceptosNoIncluidos varchar(800) = null,@CuentaCaja Varchar(100) = null)

RETURNS 
@gastos TABLE 
(
	importe float,periodo varchar(10), cuentacontable varchar(20),CodConFac varchar(20), Descripción varchar(80),Origen Varchar(50),Comprobante varchar (50), Caja varchar(100),Tipo VARCHAR(5)
)
AS
BEGIN
declare @CuentaContable varchar(20) = @CuentaContable_
declare
@temp TABLE 
(
	importe float,periodo varchar(10), cuentacontable varchar(20),CodConFac varchar(20), Descripción varchar(80),Origen Varchar(50),Comprobante varchar (50), Caja varchar(100),Tipo VARCHAR(5)
)

    --select @CuentaContable = null--, @FechaDesde = '01/01/2018', @ConceptosNoIncluidos = null,@CuentaCaja = null
	-- Fill the table variable with the rows for your result set
	declare @Descripcion varchar(200),@Tipo VARCHAR(5)
	declare cur_sor cursor
	for
		SELECT DISTINCT CONVERT(VARCHAR,ocPlaCue.CodCuenta),DesLArga,Case when ocPlaCue.CostoFijo_Var = 'Fijo' then 'CF'else 'CV' end--COALESCE(scRubros.Descripcion,'CV')
		  FROM ocPlacue --ON ocPlacue.CodCuenta = cmComCon.CodCuenta 
		  LEFT JOIN ccConFac ON ocPlacue.CodCuenta = ccConFac.CodCuenta 
		  LEFT JOIN scRubros ON ccConFac.CodRubro = scRubros.CodRubro 
	     WHERE (LEFT(VisNivPad,2) = '05' 
		    OR LEFT(VisNivPad,8) = '02.01.03'
		    OR LEFT(VisNivPad,8) = '02.01.04' 
		    OR LEFT(VisNivPad,8) = '01.01.04') 
		and coalesce(@CuentaContable,CONVERT(VARCHAR,ocPlaCue.CodCuenta))=CONVERT(VARCHAR,ocPlaCue.CodCuenta)
		
		
		open cur_sor
        
        FETCH NEXT FROM cur_sor into @CuentaContable,@Descripcion,@Tipo
        WHILE @@FETCH_STATUS = 0  
		BEGIN
		    insert into @gastos
			SELECT round(SUM(coalesce(GASTO,0)),2), 
				   PERIODO, 
				   @CuentaContable/* + CASE WHEN CodConFac <> '' THEN ' - ' ELSE '' END +*/ CodConFac,
				   CodConFac,
			       @Descripcion + CASE WHEN CodConFac <> '' THEN ' - ' ELSE '' END + Concepto,
			       Origen,
				   VisComprob,
				   Caja,
				   @Tipo
			FROM (
			 (SELECT  SUM(COALESCE(coalesce(cmRefCom.Creimporte, fmMovCaD.ImpHaber) * CASE WHEN fcCueCaj.CodCtaCaja IS NULL THEN 0 ELSE 1 END,0)) Gasto, 
					  CONVERT(VARCHAR,YEAR(xgPeriodos.Dia)) + '-' + RIGHT('0' + CONVERT(VARCHAR,MONTH(xgPeriodos.Dia)),2)Periodo,
					  'Compras' Origen,
					  CodComComp + '-' + VisCompro Viscomprob,--CONVERT(VARCHAR(6),xgPeriodos.Dia,112) Periodo
					  CONVERT(VARCHAR,fcCueCaj.CodCtaCaja) + ' - ' + fcCueCaj.Descripcion Caja,
					  CONVERT(VARCHAR,t2.CodConFac) CodConFac,
					  t2.Concepto
			  FROM xgPeriodos
			  LEFT JOIN cmComCab ON xgPeriodos.Dia = cmComCab.FecComprob AND cmComCab.DebeHaber = 'Haber'
			   AND  LTRIM(RTRIM(@CuentaContable)) IN  (SELECT CONVERT(VARCHAR,cmComCon.CodCuenta) 
														 FROM cmComCon 
														 JOIN ocPlacue ON ocPlacue.CodCuenta = cmComCon.CodCuenta 
													      AND (LEFT(VisNivPad,2) = '05' 
														   OR LEFT(VisNivPad,8) = '02.01.03'
														   OR LEFT(VisNivPad,8) = '02.01.04' 
														   OR LEFT(VisNivPad,8) = '01.01.04') 
														WHERE cmComCab.IdCompro = cmComCon.IdCompro 
														/*ORDER BY cmComCon.SubFinal DESC*/)
			  LEFT JOIN  (SELECT cmComCon.SubFinal,cmComCon.IdCompro,cmcomcon.CodCuenta,cmcomcon.CodConFac,ccConFac.Concepto
							FROM cmComCon
							JOIN ocPlacue ON ocPlacue.CodCuenta = cmComCon.CodCuenta 
							JOIN ccConFac ON cmComCon.CodConFac = ccConFac.CodConFac
							 AND (LEFT(VisNivPad,2) = '05' 
							  OR LEFT(VisNivPad,8) = '02.01.03'
							  OR LEFT(VisNivPad,8) = '02.01.04' 
							  OR LEFT(VisNivPad,8) = '01.01.04') 
							 AND cmComCon.CodCuenta = @CuentaContable) AS T2 ON T2.IdCompro = cmComCab.IdCompro 
			  LEFT JOIN ccDefCom ON cmComCab.CodComComp = ccDefCom.CodDefCom AND ccDefCom.AfeCtaCte = 'Si' 
			  LEFT JOIN cmRefCom ON cmRefCom.CreIdCompro = cmComCab.IdCompro 
			  LEFT JOIN fmMovCaD ON (COALESCE(cmRefCom.DebIdCompro,cmComCab.IdCompro) = fmMovCaD.IdCompro) AND fmMovCad.DebeHaber = 'Haber'
			  LEFT JOIN fcCueCaj ON fcCueCaj.CodCtaCaja = fmMovCaD.CodCtaCaja 
			 WHERE TipoPeriodo = 'Dia' AND cmComCab.CodComComp NOT IN ('FIO','FIS')
			   AND CONVERT(VARCHAR(6),xgPeriodos.Dia,112) BETWEEN CONVERT(VARCHAR(6),DATEADD(MM, 0,@FechaDesde),112)
															  AND CONVERT(VARCHAR(6),DATEADD(MM,CASE WHEN @CuentaContable_ IS NULL THEN 11 ELSE 0 END,@FechaDesde),112)
			   AND t2.CodCuenta = @CuentaContable
			 GROUP BY CONVERT(VARCHAR,YEAR(xgPeriodos.Dia)) + '-' + RIGHT('0' + CONVERT(VARCHAR,MONTH(xgPeriodos.Dia)),2),CodComComp + '-' + VisCompro,CONVERT(VARCHAR,fcCueCaj.CodCtaCaja) + ' - ' + fcCueCaj.Descripcion, t2.CodConFac,t2.Concepto)--CONVERT(VARCHAR(6),xgPeriodos.Dia,112)) 
			 UNION 
			 (SELECT round(SUM(COALESCE(fmMovCaD.ImpDebe/fmMovCaC.Subt_Debitos*fondo.ImpHaber,0)),2) Gasto, 
					 CONVERT(VARCHAR,YEAR(xgPeriodos.Dia)) + '-' + RIGHT('0' + CONVERT(VARCHAR,MONTH(xgPeriodos.Dia)),2)Periodo,
					 'Fondos' Origen,
					 fmMovCaC.VisTransa VisComprob,
					 CONVERT(VARCHAR,fcCueCaj.CodCtaCaja) + ' - ' + fcCueCaj.Descripcion Caja,
					 '' CodConFac,
					 '' Concepto
			  FROM xgPeriodos   
			  LEFT JOIN fmMovCaC ON fmMovCaC.FechaCaja =  xgPeriodos.Dia 
			   AND RIGHT(fmMovCaC.VisTransa,1) = 'f' AND fmMovCaC.CodComCaja IN ('EV','EVS')
			  LEFT JOIN fmMovCaD ON fmMovCaD.IdCompro = fmMovCaC.IdCompro AND fmMovCaD.TipoMovim = 'Egreso' AND fmMovCaD.ImpDebe > 0 
				   AND CONVERT(VARCHAR,fmMovCaD.CodCuenta)= LTRIM(RTRIM(@CuentaContable))  
			 -- LEFT JOIN fcCueCaj ON fcCueCaj.CodCtaCaja = fmMovCaD.CodCtaCaja 
			  LEFT JOIN ocPlacue ON ocPlacue.CodCuenta = fmMovCaD.CodCuenta 
			  AND (LEFT(VisNivPad,2) = '05' 
				   OR LEFT(VisNivPad,8) = '02.01.03'
				   OR LEFT(VisNivPad,8) = '02.01.04'
				   OR LEFT(VisNivPad,8) = '01.01.04')
			  JOIN (select * from fmMovCaD f where f.TipoMovim = 'Egreso' AND f.ImpHaber > 0 AND RIGHT(f.VisTransa,1) = 'f' ) fondo ON fondo.IdCompro = fmMovCaC.IdCompro 
			  LEFT JOIN fcCueCaj ON fcCueCaj.CodCtaCaja = fondo.CodCtaCaja 
			 WHERE TipoPeriodo = 'Dia' 
			   AND CONVERT(VARCHAR(6),xgPeriodos.Dia,112) BETWEEN CONVERT(VARCHAR(6),DATEADD(MM, 0,@FechaDesde),112)
															  AND CONVERT(VARCHAR(6),DATEADD(MM,CASE WHEN @CuentaContable_ IS NULL THEN 11 ELSE 0 END,@FechaDesde),112)
			   AND ocPlaCue.CodCuenta = @CuentaContable
			 GROUP BY CONVERT(VARCHAR,YEAR(xgPeriodos.Dia)) + '-' + RIGHT('0' + CONVERT(VARCHAR,MONTH(xgPeriodos.Dia)),2),fmMovCaC.VisTransa,CONVERT(VARCHAR,fcCueCaj.CodCtaCaja) + ' - ' + fcCueCaj.Descripcion
			 having SUM(COALESCE(fmMovCaD.ImpDebe,0)) <> 0))T1--CONVERT(VARCHAR(6),xgPeriodos.Dia,112))) T1 
			 GROUP BY Periodo,Origen,VisComprob,Caja,t1.CodConFac, t1.Concepto ORDER BY PERIODO
			 
			 FETCH NEXT FROM cur_sor into @CuentaContable, @Descripcion,@Tipo
		END   
		CLOSE CUR_SOR;  
		DEALLOCATE CUR_SOR;

--(		
--	select *--importe,periodo
--	from @gastos
--	pivot (sum(importe)for periodo in ([1],[2],[3],[4],[5],[6],[7],[8],[9],[10],[11],[12])) as t2
--	--order by CONVERT(INT,cuentacontable)
--)
--GO

--insert into @temp
--select * from @gastos	

--delete @gastos

--insert into @gastos
--select sum(importe),periodo,cuentacontable,CodConFac,[Descripción],origen,comprobante,caja,tipo
--from @temp
--group by periodo,cuentacontable,CodConFac,[Descripción],origen,comprobante,caja,tipo



RETURN 
END

GO
/****** Object:  UserDefinedFunction [dbo].[F_Ingresos]    Script Date: 18/01/2020 13:27:32 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE FUNCTION [dbo].[F_Ingresos]

( @FechaDesde varchar(20) = null )

RETURNS 
@ingresos TABLE 
(
	importe float,periodo varchar(10), canal varchar(20), Descripción varchar(80)
)
AS
BEGIN

	DECLARE @temp TABLE (importe float,periodo varchar(10), canal varchar(20), Descripción varchar(80))

	DECLARE @cueCAj VARCHAR(10), @descripcion VARCHAR(100)
	DECLARE cuecaj CURSOR FOR
	SELECT CodCtaCaja,Descripcion
	FROM fcCueCaj
		
		OPEN cuecaj
        
        FETCH NEXT FROM cuecaj into @cueCaj, @descripcion
        WHILE @@FETCH_STATUS = 0  
		BEGIN
		    INSERT INTO @ingresos 
			SELECT SUM(COALESCE(TotalComprob ,0)), CONVERT(VARCHAR(6),xgPeriodos.Dia,112),@cueCAj,@descripcion
			FROM xgPeriodos   
			LEFT JOIN vmComCab ON xgPeriodos.Dia = vmComCab.FecComprob AND vmComCab.DebeHaber = 'Haber' AND CONVERT(VARCHAR,vmComCab.HsKm)  =  LTRIM(RTRIM(' 11'))
			AND  vmComCab.CodComVta NOT IN ('CAC','CBC')
			LEFT JOIN vcVended ON vmComCab.CodVended = vcVended.CodVended 
			LEFT JOIN vcDefCom ON vmComCab.CodComVta = vcDefCom.CodDefCom 
			AND  vcDefCom.AfeCtaCte = 'Si' 
			WHERE TipoPeriodo = 'Dia' 
			AND CONVERT(VARCHAR(6),xgPeriodos.Dia,112) BETWEEN CONVERT(VARCHAR(6),DATEADD(MM,0,@FechaDesde),112)
			AND  CONVERT(VARCHAR(6),DATEADD(MM,11,@FechaDesde),112)
			GROUP BY CONVERT(VARCHAR(6),xgPeriodos.Dia,112) ORDER BY CONVERT(VARCHAR(6),xgPeriodos.Dia,112) 

			FETCH NEXT FROM cuecaj into @cueCaj, @descripcion
		END   
		CLOSE cuecaj;  
		DEALLOCATE cuecaj;

	RETURN 
END

GO
/****** Object:  UserDefinedFunction [dbo].[F_IngresosConcepto]    Script Date: 18/01/2020 13:27:32 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
--select * from F_IngresosConcepto(null,'01/01/2018',null,null)

CREATE FUNCTION [dbo].[F_IngresosConcepto]
( @CuentaContable Varchar(20)  = null, @FechaDesde varchar(20) = null , @ConceptosNoIncluidos varchar(800) = null,@CuentaCaja Varchar(100) = null)

RETURNS 
@gastos TABLE 
(
	importe FLOAT,periodo VARCHAR(10), cuentaCaja VARCHAR(20),Descripción VARCHAR(80)
)
AS
BEGIN

	DECLARE
	@temp TABLE 
	(
		importe FLOAT,periodo VARCHAR(10), cuentaCaja VARCHAR(20),Descripción VARCHAR(80)
	)


	DECLARE @cueCaj VARCHAR(10), @descripcion VARCHAR(100)
	DECLARE cuecaj CURSOR FOR
	SELECT CodVended,NomVended 
	FROM vcVended 
	--WHERE TipoVendedor in ('','Cobrador') and Habilitado = 'Si'
		

	OPEN cuecaj
	FETCH NEXT FROM cuecaj INTO @cueCaj, @descripcion

	WHILE @@fetch_status = 0
	BEGIN

		INSERT INTO @temp 
		
		SELECT SUM(COALESCE(TotalComprob ,0)), CONVERT(VARCHAR,YEAR(xgPeriodos.Dia)) + '-' + RIGHT('0' + CONVERT(VARCHAR,MONTH(xgPeriodos.Dia)),2)Periodo,
			   @cueCaj,@descripcion
		FROM xgPeriodos   
		LEFT JOIN vmComCab ON xgPeriodos.Dia = vmComCab.FecComprob AND vmComCab.DebeHaber = 'Haber' 
		AND  vmComCab.CodComVta NOT IN ('CAC','CBC')
		LEFT JOIN vcVended ON vmComCab.CodVended = vcVended.CodVended 
		LEFT JOIN vcDefCom ON vmComCab.CodComVta = vcDefCom.CodDefCom 
		AND  vcDefCom.AfeCtaCte = 'Si' 
		JOIN vcClient ON vmComCab.CodCliente = vcClient.CodCliente AND CONVERT(VARCHAR,vcClient.CodCobrador)   =  LTRIM(RTRIM(@cueCaj))
		WHERE TipoPeriodo = 'Dia' 
		AND CONVERT(VARCHAR(6),xgPeriodos.Dia,112) BETWEEN CONVERT(VARCHAR(6),DATEADD(MM,0,@FechaDesde),112)
		AND  CONVERT(VARCHAR(6),DATEADD(MM,11,@FechaDesde),112)
		GROUP BY CONVERT(VARCHAR,YEAR(xgPeriodos.Dia)) + '-' + RIGHT('0' + CONVERT(VARCHAR,MONTH(xgPeriodos.Dia)),2) 
		ORDER BY CONVERT(VARCHAR,YEAR(xgPeriodos.Dia)) + '-' + RIGHT('0' + CONVERT(VARCHAR,MONTH(xgPeriodos.Dia)),2)
		


		FETCH NEXT FROM cuecaj into @cueCaj, @descripcion

	END
	CLOSE cuecaj
	DEALLOCATE cuecaj

	INSERT INTO @gastos
    SELECT sum(importe),periodo,cuentaCaja,Descripción
    FROM @temp
    GROUP BY periodo,cuentaCaja,Descripción

	RETURN 
END

GO
/****** Object:  UserDefinedFunction [dbo].[Fun_Planeon_DigitoVerif]    Script Date: 18/01/2020 13:27:32 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date, ,>
-- Description:	<Description, ,>
-- =============================================
CREATE FUNCTION [dbo].[Fun_Planeon_DigitoVerif]
(
	-- Add the parameters for the function here
	@Cadena VarChar(100)
)
RETURNS VarChar(2)
AS
BEGIN
	-- Declare the return variable here
	-- DECLARE @Cadena VarChar(60)
	DECLARE @Primos VarChar(60)

	DECLARE @Contador INT
	DECLARE @Digito1  INT
	DECLARE @Digito2  INT
    DECLARE @Resupuesta VarChar(2)
	DECLARE @Suma1    INT

	               
	-- SET @Cadena = '0123000051000412500000000001234000015010'  
	SET @Primos = '13579357935793579357935793579357935793579357935'
	             --13579357935793579357935793579357935793579357935
	SET @Suma1 = 0

	-- Acumulacion de productos
	SET @Contador = 0
	WHILE (@Contador <= 60 )
		BEGIN
			SET @Contador = @Contador + 1
	        
			SET @Suma1 = @Suma1 + (  CONVERT(Int,SUBSTRING(@Cadena,@Contador,1) ) 
								   * CONVERT(Int,SUBSTRING(@Primos,@Contador,1) )  )
		END

	-- Calculo de resto y Digito 1
	SET @Suma1 = FLOOR( @Suma1 / 2 ) 
	SET @Digito1 = @Suma1 % 10
	SET @Suma1 = 0



	-- Añado Digito1 a la cadeda
	SET @Cadena = LTRIM(RTRIM(@Cadena)) + STR(@Digito1,1)

	---- Acumulacion 2
	--SET @Contador = 0
	--WHILE (@Contador <= 60 )
	--	BEGIN
	--		SET @Contador = @Contador + 1
	        
	--		SET @Suma1 = @Suma1 + (  CONVERT(Int,SUBSTRING(@Cadena,@Contador,1) ) 
	--							   * CONVERT(Int,SUBSTRING(@Primos,@Contador,1) )  )
	--	END

	---- Calculo de resto y Digito 2
	--SET @Suma1 = FLOOR( @Suma1 / 2 ) 
	--SET @Digito2 = @Suma1 % 10
	    
	-- SELECT STR(@Digito1,1) +  STR(@Digito2,1)
	SET @Resupuesta = @Digito1--STR(@Digito1,1) + STR(@Digito2,1)

	-- Return the result of the function
	RETURN @Resupuesta

END


GO
/****** Object:  UserDefinedFunction [dbo].[Fun_Planeon_DigitoVerifRapi]    Script Date: 18/01/2020 13:27:32 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date, ,>
-- Description:	<Description, ,>
-- =============================================
CREATE FUNCTION [dbo].[Fun_Planeon_DigitoVerifRapi]
(
	-- Add the parameters for the function here
	@Cadena VarChar(100)
)
RETURNS VarChar(2)
AS
BEGIN
	-- Declare the return variable here
	-- DECLARE @Cadena VarChar(60)
	DECLARE @Primos VarChar(60)

	DECLARE @Contador INT
	DECLARE @Digito1  INT
	DECLARE @Digito2  INT
    DECLARE @Resupuesta VarChar(2)
	DECLARE @Suma1    INT

	               
	-- SET @Cadena = '0123000051000412500000000001234000015010'  
	SET @Primos = '13579357935793579357935793579357935793579357935'
	             --13579357935793579357935793579357935793579357935
	SET @Suma1 = 0

	-- Acumulacion de productos
	SET @Contador = 0
	WHILE (@Contador <= 60 )
		BEGIN
			SET @Contador = @Contador + 1
	        
			SET @Suma1 = @Suma1 + (  CONVERT(Int,SUBSTRING(@Cadena,@Contador,1) ) 
								   * CONVERT(Int,SUBSTRING(@Primos,@Contador,1) )  )
		END

	-- Calculo de resto y Digito 1
	SET @Suma1 = FLOOR( @Suma1 / 2 ) 
	SET @Digito1 = @Suma1 % 10
	SET @Suma1 = 0



	-- Añado Digito1 a la cadeda
	SET @Cadena = LTRIM(RTRIM(@Cadena)) + STR(@Digito1,1)

	---- Acumulacion 2
	--SET @Contador = 0
	--WHILE (@Contador <= 60 )
	--	BEGIN
	--		SET @Contador = @Contador + 1
	        
	--		SET @Suma1 = @Suma1 + (  CONVERT(Int,SUBSTRING(@Cadena,@Contador,1) ) 
	--							   * CONVERT(Int,SUBSTRING(@Primos,@Contador,1) )  )
	--	END

	---- Calculo de resto y Digito 2
	--SET @Suma1 = FLOOR( @Suma1 / 2 ) 
	--SET @Digito2 = @Suma1 % 10
	    
	-- SELECT STR(@Digito1,1) +  STR(@Digito2,1)
	SET @Resupuesta = @Digito1--STR(@Digito1,1) + STR(@Digito2,1)

	-- Return the result of the function
	RETURN @Resupuesta

END


GO
/****** Object:  UserDefinedFunction [dbo].[func_PeriodoGastos]    Script Date: 18/01/2020 13:27:32 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE FUNCTION [dbo].[func_PeriodoGastos]
( @CuentaContable Varchar(20)  = null, @FechaDesde varchar(20) = '2019/01/01' , @ConceptosNoIncluidos varchar(800) = null,@CuentaCaja Varchar(100) = null)
RETURNS varchar(800)
AS
BEGIN
	-- Declare the return variable here
	DECLARE @columns VARCHAR(800) = ''
 
	-- select the category names
	SELECT 
		@columns+=
		'{Title: ''' + periodo + ''', data: ''' + periodo + '''},'
	--select *  
	FROM (select distinct periodo 
		 from F_GastosConcepto2(null,@FechaDesde,null,null)) l
	ORDER BY
		periodo;

    set @columns = '{Title:''Cuenta Contbale'', data: ''CuentaContable''},'+
	               '{Title:''Código Concepto'', data: ''CodigoConcepto''},'+
				   '{Title:''Descripción'', data: ''Descripcion''}'+
				   '{Title:''Período'', data: ''Periodo''}'+
				    + @columns
	SET @columns = LEFT(@columns, LEN(@columns) - 1);
	return @columns 

END

GO
/****** Object:  UserDefinedFunction [dbo].[funcPeriodoGastos]    Script Date: 18/01/2020 13:27:32 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create function [dbo].[funcPeriodoGastos]
( @CuentaContable Varchar(20)  = null, @FechaDesde varchar(20) = '2019/01/01' , @ConceptosNoIncluidos varchar(800) = null,@CuentaCaja Varchar(100) = null)
returns varchar(800)
as
begin 
DECLARE
    @columns NVARCHAR(MAX) = '',
    @sql     NVARCHAR(MAX) = '';
 
-- select the category names
SELECT 
    @columns+=
	'{Title: ' + periodo + ', data: ' + periodo + '},'
--select *  
FROM (select distinct periodo 
     from Func_GastosConcepto(null,@FechaDesde,null,null)) l
ORDER BY
    periodo;


return @columns 
end
GO
/****** Object:  UserDefinedFunction [dbo].[IDREGISTRO]    Script Date: 18/01/2020 13:27:32 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO



-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date, ,>
-- Description:	<Description, ,>
-- =============================================
CREATE FUNCTION [dbo].[IDREGISTRO]
(
	@CODCLIENTE INT,
	@CODCONCEPTO1 INT,
	@CODCONCEPTO2 INT,
	@PORCENTAJE DECIMAL(10,2),
	@REDONDEO DECIMAL(10,2),
	@LIMITE DECIMAL(10,2)
)
RETURNS  VARCHAR(5000)
AS
BEGIN
	-- Declare the return variable here
	DECLARE @RESULTADO VARCHAR (5000)
	DECLARE @CONCACTUAL INT
	DECLARE @DOCACTUAL DECIMAL
	DECLARE @VALOR DECIMAL(10,2)
	DECLARE @REDONDEADO DECIMAL(10,2)
	SET @RESULTADO = ' ' 
    DECLARE CURSOS_IDREG CURSOR FOR
    
    
	-- Add the T-SQL statements to compute the return value here
	SELECT 
       vcConFac.CodConFac,
       vcCliDebAuto.DocNumero,
       vcCliDebAuto.ValorUni,
       CASE WHEN (((vcCliDebAuto.ValorUni*@PORCENTAJE)/100) + vcCliDebAuto.ValorUni) % @REDONDEO <@LIMITE THEN
                 ((((vcCliDebAuto.ValorUni*@PORCENTAJE)/100 )+ vcCliDebAuto.ValorUni)) - ((((vcCliDebAuto.ValorUni*@PORCENTAJE)/100) + vcCliDebAuto.ValorUni) % @REDONDEO)
            WHEN  vcCliDebAuto.ValorUni = 0 THEN 0   
            ELSE 
                 ((((vcCliDebAuto.ValorUni*@PORCENTAJE)/100) + vcCliDebAuto.ValorUni)) + (@REDONDEO- ((((vcCliDebAuto.ValorUni*@PORCENTAJE)/100) + vcCliDebAuto.ValorUni) % @REDONDEO))
            END AS Redondeado
  FROM vcCliDebAuto
  JOIN vcConFac ON vcCliDebAuto.CodConFac = vcConFac.CodConFac
  WHERE vcCliDebAuto.CodCliente = @CODCLIENTE 
	AND (vcConFac.CodRubro = @CODCONCEPTO1 or @CODCONCEPTO1 = 0)
	AND (vcConFac.CodConFac = @CODCONCEPTO2 or @CODCONCEPTO2 = 0)
	
	
	OPEN CURSOS_IDREG
	FETCH NEXT FROM CURSOS_IDREG INTO @CONCACTUAL,  @DOCACTUAL, @VALOR, @REDONDEADO
	WHILE @@FETCH_STATUS = 0
	BEGIN
	  SET @RESULTADO = @RESULTADO + 
	      RIGHT('000000' +RTRIM(LTRIM(STR(@CONCACTUAL))),5 ) +'   '+ 
	      RIGHT('000000' +RTRIM(LTRIM(STR(@DOCACTUAL ))),11) +'          '+
	      RIGHT('000000' +RTRIM(LTRIM(CONVERT(VARCHAR(8),@VALOR,1     ))),6 ) +'            '+ 
	      RIGHT('000000' +RTRIM(LTRIM(CONVERT(VARCHAR(8),@REDONDEADO,1))),6 ) + 
	      CHAR(13)+ CHAR(10) + ' '
	FETCH NEXT FROM CURSOS_IDREG INTO @CONCACTUAL,  @DOCACTUAL, @VALOR, @REDONDEADO
	  END
    CLOSE CURSOS_IDREG
    DEALLOCATE CURSOS_IDREG
	-- Return the result of the function
	RETURN @RESULTADO

END


GO
/****** Object:  UserDefinedFunction [dbo].[TotalCtaCaja]    Script Date: 18/01/2020 13:27:32 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO



-- =============================================
-- Author:		Mauricio Càrcamo
-- Create date: 06/01/2014
-- Description:	se convierte en tablas los registros de eventos de cambio de precio
-- =============================================
CREATE FUNCTION [dbo].[TotalCtaCaja]
(
	@IdCompro VARCHAR(20),
	@Cuenta VARCHAR(100),
	@Filtro VARCHAR(100)=null,
	@Periodo varchar(100)= null
)
RETURNS  DECIMAL(15,2)
AS
BEGIN

	DECLARE @RESULTADO VARCHAR (5000) = '0'
	
  
SELECT @RESULTADO = COALESCE(SUM(fm.ImpHaber),0)
 FROM fmMovCaD fm 
 LEFT JOIN fcCueCaj ON fcCueCaj.CodCtaCaja = fm.CodCtaCaja
WHERE fm.IdCompro = @IdCompro AND fm.DebeHaber = 'Haber'
  AND (fcCueCaj.Descripcion = @Cuenta OR  @Cuenta = '')
  --AND CONVERT(VARCHAR,fm.CodCuenta) in ( replace(replace(replace(replace(@Filtro,'in',''),'=',''),'(',''),')','') )
  and CONVERT(VARCHAR(6),coalesce(fm.FechaVto,fm.FechaCaja),112)= @Periodo

	RETURN @RESULTADO

END


GO
