USE [OMSA]
GO
/****** Object:  StoredProcedure [dbo].[UserWebInsertOrUdate]    Script Date: 19/01/2020 16:51:06 ******/
DROP PROCEDURE [dbo].[UserWebInsertOrUdate]
GO
/****** Object:  StoredProcedure [dbo].[UpdatePricesConcets]    Script Date: 19/01/2020 16:51:06 ******/
DROP PROCEDURE [dbo].[UpdatePricesConcets]
GO
/****** Object:  StoredProcedure [dbo].[UpdatePricesConcepts]    Script Date: 19/01/2020 16:51:06 ******/
DROP PROCEDURE [dbo].[UpdatePricesConcepts]
GO
/****** Object:  StoredProcedure [dbo].[updateClientPrices]    Script Date: 19/01/2020 16:51:06 ******/
DROP PROCEDURE [dbo].[updateClientPrices]
GO
/****** Object:  StoredProcedure [dbo].[sp_GrabaArchivo]    Script Date: 19/01/2020 16:51:06 ******/
DROP PROCEDURE [dbo].[sp_GrabaArchivo]
GO
/****** Object:  StoredProcedure [dbo].[SP_GastosConcepto]    Script Date: 19/01/2020 16:51:06 ******/
DROP PROCEDURE [dbo].[SP_GastosConcepto]
GO
/****** Object:  StoredProcedure [dbo].[sp_CantCampInd]    Script Date: 19/01/2020 16:51:06 ******/
DROP PROCEDURE [dbo].[sp_CantCampInd]
GO
/****** Object:  StoredProcedure [dbo].[ServBorrados]    Script Date: 19/01/2020 16:51:06 ******/
DROP PROCEDURE [dbo].[ServBorrados]
GO
/****** Object:  StoredProcedure [dbo].[proc_pivotIngresos]    Script Date: 19/01/2020 16:51:06 ******/
DROP PROCEDURE [dbo].[proc_pivotIngresos]
GO
/****** Object:  StoredProcedure [dbo].[proc_pivotGastos]    Script Date: 19/01/2020 16:51:06 ******/
DROP PROCEDURE [dbo].[proc_pivotGastos]
GO
/****** Object:  StoredProcedure [dbo].[proc_pivotEnviosCobranza]    Script Date: 19/01/2020 16:51:06 ******/
DROP PROCEDURE [dbo].[proc_pivotEnviosCobranza]
GO
/****** Object:  StoredProcedure [dbo].[PLANEON_Log_EnableTriggers]    Script Date: 19/01/2020 16:51:06 ******/
DROP PROCEDURE [dbo].[PLANEON_Log_EnableTriggers]
GO
/****** Object:  StoredProcedure [dbo].[PLANEON_Log_DisableTriggers]    Script Date: 19/01/2020 16:51:06 ******/
DROP PROCEDURE [dbo].[PLANEON_Log_DisableTriggers]
GO
/****** Object:  StoredProcedure [dbo].[Planeon_CalcularMayorClientesPesos]    Script Date: 19/01/2020 16:51:06 ******/
DROP PROCEDURE [dbo].[Planeon_CalcularMayorClientesPesos]
GO
/****** Object:  StoredProcedure [dbo].[insertOrUpdateTipoConcepto]    Script Date: 19/01/2020 16:51:06 ******/
DROP PROCEDURE [dbo].[insertOrUpdateTipoConcepto]
GO
/****** Object:  StoredProcedure [dbo].[insertOrUpdateSubRubro]    Script Date: 19/01/2020 16:51:06 ******/
DROP PROCEDURE [dbo].[insertOrUpdateSubRubro]
GO
/****** Object:  StoredProcedure [dbo].[insertOrUpdateRubro]    Script Date: 19/01/2020 16:51:06 ******/
DROP PROCEDURE [dbo].[insertOrUpdateRubro]
GO
/****** Object:  StoredProcedure [dbo].[insertOrUpdatePrestacion]    Script Date: 19/01/2020 16:51:06 ******/
DROP PROCEDURE [dbo].[insertOrUpdatePrestacion]
GO
/****** Object:  StoredProcedure [dbo].[insertOrUpdateDetPrestacion]    Script Date: 19/01/2020 16:51:06 ******/
DROP PROCEDURE [dbo].[insertOrUpdateDetPrestacion]
GO
/****** Object:  StoredProcedure [dbo].[InsertOrUpdateDetCostoTipCon]    Script Date: 19/01/2020 16:51:06 ******/
DROP PROCEDURE [dbo].[InsertOrUpdateDetCostoTipCon]
GO
/****** Object:  StoredProcedure [dbo].[insertOrUpdateConcept]    Script Date: 19/01/2020 16:51:06 ******/
DROP PROCEDURE [dbo].[insertOrUpdateConcept]
GO
/****** Object:  StoredProcedure [dbo].[InsertOrUpdateCabCostoTipCon]    Script Date: 19/01/2020 16:51:06 ******/
DROP PROCEDURE [dbo].[InsertOrUpdateCabCostoTipCon]
GO
/****** Object:  StoredProcedure [dbo].[GetTiposConceptosByRubro]    Script Date: 19/01/2020 16:51:06 ******/
DROP PROCEDURE [dbo].[GetTiposConceptosByRubro]
GO
/****** Object:  StoredProcedure [dbo].[GetTiposConceptosAll]    Script Date: 19/01/2020 16:51:06 ******/
DROP PROCEDURE [dbo].[GetTiposConceptosAll]
GO
/****** Object:  StoredProcedure [dbo].[GetTipoConceptoByID]    Script Date: 19/01/2020 16:51:06 ******/
DROP PROCEDURE [dbo].[GetTipoConceptoByID]
GO
/****** Object:  StoredProcedure [dbo].[GetSubRubrosByFilters]    Script Date: 19/01/2020 16:51:06 ******/
DROP PROCEDURE [dbo].[GetSubRubrosByFilters]
GO
/****** Object:  StoredProcedure [dbo].[GetSubRubrosAll]    Script Date: 19/01/2020 16:51:06 ******/
DROP PROCEDURE [dbo].[GetSubRubrosAll]
GO
/****** Object:  StoredProcedure [dbo].[GetSubRubroByID]    Script Date: 19/01/2020 16:51:06 ******/
DROP PROCEDURE [dbo].[GetSubRubroByID]
GO
/****** Object:  StoredProcedure [dbo].[GetRubrosAll]    Script Date: 19/01/2020 16:51:06 ******/
DROP PROCEDURE [dbo].[GetRubrosAll]
GO
/****** Object:  StoredProcedure [dbo].[GetRubroByID]    Script Date: 19/01/2020 16:51:06 ******/
DROP PROCEDURE [dbo].[GetRubroByID]
GO
/****** Object:  StoredProcedure [dbo].[getFormulaPorTipo]    Script Date: 19/01/2020 16:51:06 ******/
DROP PROCEDURE [dbo].[getFormulaPorTipo]
GO
/****** Object:  StoredProcedure [dbo].[GetDetTipoConceptosAll]    Script Date: 19/01/2020 16:51:06 ******/
DROP PROCEDURE [dbo].[GetDetTipoConceptosAll]
GO
/****** Object:  StoredProcedure [dbo].[GetDetSubRubrosAll]    Script Date: 19/01/2020 16:51:06 ******/
DROP PROCEDURE [dbo].[GetDetSubRubrosAll]
GO
/****** Object:  StoredProcedure [dbo].[GetDetRubrosAll]    Script Date: 19/01/2020 16:51:06 ******/
DROP PROCEDURE [dbo].[GetDetRubrosAll]
GO
/****** Object:  StoredProcedure [dbo].[GetDetPrestacion]    Script Date: 19/01/2020 16:51:06 ******/
DROP PROCEDURE [dbo].[GetDetPrestacion]
GO
/****** Object:  StoredProcedure [dbo].[GetDetConceptsAll]    Script Date: 19/01/2020 16:51:06 ******/
DROP PROCEDURE [dbo].[GetDetConceptsAll]
GO
/****** Object:  StoredProcedure [dbo].[getDatosCalculo]    Script Date: 19/01/2020 16:51:06 ******/
DROP PROCEDURE [dbo].[getDatosCalculo]
GO
/****** Object:  StoredProcedure [dbo].[GetConcetsByFilters]    Script Date: 19/01/2020 16:51:06 ******/
DROP PROCEDURE [dbo].[GetConcetsByFilters]
GO
/****** Object:  StoredProcedure [dbo].[GetConcetpByID]    Script Date: 19/01/2020 16:51:06 ******/
DROP PROCEDURE [dbo].[GetConcetpByID]
GO
/****** Object:  StoredProcedure [dbo].[GetConcetosByFilters]    Script Date: 19/01/2020 16:51:06 ******/
DROP PROCEDURE [dbo].[GetConcetosByFilters]
GO
/****** Object:  StoredProcedure [dbo].[GetConceptsAll]    Script Date: 19/01/2020 16:51:06 ******/
DROP PROCEDURE [dbo].[GetConceptsAll]
GO
/****** Object:  StoredProcedure [dbo].[GetConceptByID]    Script Date: 19/01/2020 16:51:06 ******/
DROP PROCEDURE [dbo].[GetConceptByID]
GO
/****** Object:  StoredProcedure [dbo].[getCalculoImporte]    Script Date: 19/01/2020 16:51:06 ******/
DROP PROCEDURE [dbo].[getCalculoImporte]
GO
/****** Object:  StoredProcedure [dbo].[getCalculoFormulas]    Script Date: 19/01/2020 16:51:06 ******/
DROP PROCEDURE [dbo].[getCalculoFormulas]
GO
/****** Object:  StoredProcedure [dbo].[getCalculoConceptos]    Script Date: 19/01/2020 16:51:06 ******/
DROP PROCEDURE [dbo].[getCalculoConceptos]
GO
/****** Object:  StoredProcedure [dbo].[getCalculoClientes]    Script Date: 19/01/2020 16:51:06 ******/
DROP PROCEDURE [dbo].[getCalculoClientes]
GO
/****** Object:  StoredProcedure [dbo].[getCalculoAliases]    Script Date: 19/01/2020 16:51:06 ******/
DROP PROCEDURE [dbo].[getCalculoAliases]
GO
/****** Object:  StoredProcedure [dbo].[DatosFormulaInsertOrUpdate]    Script Date: 19/01/2020 16:51:06 ******/
DROP PROCEDURE [dbo].[DatosFormulaInsertOrUpdate]
GO
/****** Object:  StoredProcedure [dbo].[DatosFormulaInsertOrUpdate]    Script Date: 19/01/2020 16:51:06 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create PROCEDURE [dbo].[DatosFormulaInsertOrUpdate]
  @CodTipConcepto int, @CodSubRub int , @CostoPlan float, @DescripionCalculo varchar(500), @Alias varchar(10), @Formula varchar(100), @CodConFac int, @Carencia int, @Usuario varchar(50)
AS
BEGIN

   if exists(select * from CalculoPorTipo_SubRubro c where c.CodSubRub = @CodSubRub and c.CodTipConcepto = @CodTipConcepto)
   begin
	update c
	set c.Alias = @Alias, c.Carencia = @Carencia, c.CodConFac = @CodConFac, c.CodSubRub = @CodSubRub, c.CodTipConcepto = @CodTipConcepto,
	    c.Descripcion = @DescripionCalculo, c.Formula = @Formula, c.Importe = @CostoPlan
	from CalculoPorTipo_SubRubro c 
	where c.CodSubRub = @CodSubRub 
	  and c.CodTipConcepto = @CodTipConcepto
   end
   else
   begin
		insert into CalculoPorTipo_SubRubro (ID,Alias,Carencia,CodConFac,CodSubRub,CodTipConcepto,Descripcion,Formula,Importe,UsuarioAlta,FechaAlta)
		            values(1,@Alias,@Carencia,@CodConFac,@CodSubRub,@CodTipConcepto,@DescripionCalculo,@Formula,@CostoPlan,@Usuario,Getdate())

   end

END
GO
/****** Object:  StoredProcedure [dbo].[getCalculoAliases]    Script Date: 19/01/2020 16:51:06 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[getCalculoAliases]
@CodRubro int
AS
BEGIN
	SET NOCOUNT ON;

		if exists (SELECT * FROM sysobjects WHERE name = '##tabla1Aliases')
		drop table ##tabla1Aliases
	
		DECLARE
		@columns NVARCHAR(MAX) = '',
		@sql     NVARCHAR(MAX) = '';
 
		-- select the category names
		SELECT 
			@columns+=
			QUOTENAME(DesConcepto) + ','
		FROM (select distinct x.DesConcepto
			  from xgTipCon x 
			  join tipoconceptorubro tcr on tcr.CodTipConcepto = x.CodTipConcepto
			  where tcr.CodRubro = @CodRubro) l


		-- remove the last comma
		SET @columns = LEFT(@columns, LEN(@columns) - 1);

		
		-- construct dynamic SQL
		SET @sql ='
		create  table ##tabla1Aliases([Cod] int,[Cobertura] varchar(200), [Descripcion Calculo] varchar(200), [Carencia] int, '+  replace(@columns,',','varchar(500),') + 'varchar(500))';

		EXECUTE sp_executesql @sql 
		
		insert into ##tabla1Aliases (Cod,cobertura,[Descripcion Calculo],[Carencia])
		select CodSubRub,sr.Descripcion, (select top 1 cs.Descripcion from CalculoPorTipo_SubRubro cs where sr.CodSubRub = cs.CodSubRub order by len(cs.Descripcion) desc), 60
		from scSubRub sr
		where sr.CodRubro = @CodRubro

		declare @desc varchar(100), @cod int

		declare clasificacion cursor for
		select x.DesConcepto, x.CodTipConcepto 
		from xgTipCon x
		join tipoconceptorubro tcr on tcr.CodTipConcepto = x.CodTipConcepto
		where tcr.CodRubro = @CodRubro


		open clasificacion

		fetch next from clasificacion into @desc, @cod
		WHILE @@FETCH_STATUS = 0
		BEGIN

			set @sql = 'update ##tabla1Aliases set [' + @desc + '] = (select Alias from CalculoPorTipo_SubRubro where CodTipConcepto = ' + convert(varchar,@cod) + ' and CodSubRub = Cod)'
			EXECUTE sp_executesql @sql 
			fetch next from clasificacion into @desc, @cod
		END
		close clasificacion
		deallocate clasificacion

		select * from ##tabla1Aliases order by cod

		drop table ##tabla1Aliases

END


GO
/****** Object:  StoredProcedure [dbo].[getCalculoClientes]    Script Date: 19/01/2020 16:51:06 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE procedure [dbo].[getCalculoClientes]
        @CodRubro INT,
        @CodSubRub INT,
        @CodTipConcepto INT,
        @CodConFac INT,
		@Redondeo INT,
        @Limite INT,
		@Vigencia datetime,
		@Excluir varchar(800),
		@ClienteDesde INT,
        @ClienteHasta INT
AS

 
 SELECT 
       '('+convert( varchar,vcClient.CodCliente)+') '+ vcClient.RazSocial + ' ' + RTRIM(xgDocDGI.DesDocume) + ': ' + vcClient.NumDocume Cliente,
       convert(varchar,vcConFac.CodConFac) + ' - ' +  vcConFac.Concepto Concepto,
       vcCliDebAuto.ValorUni [Valor actual],
	   d.PorcDescuento [% Descuento],

	   --vcConFac.preunitario [Valor],

	   d.PorcDescuento / 100.00 * vcConFac.preunitario [Descuento],

	   --vcConFac.PreUnitario -(d.PorcDescuento / 100 * vcConFac.PreUnitario) +        
	   CASE WHEN (vcConFac.PreUnitario - (d.PorcDescuento / 100 * vcConFac.PreUnitario))   % @Redondeo < @Limite THEN
                 (vcConFac.PreUnitario - (d.PorcDescuento / 100 * vcConFac.PreUnitario)) - ((vcConFac.PreUnitario - (d.PorcDescuento / 100 * vcConFac.PreUnitario)) % @Redondeo)
            ELSE 
                 (vcConFac.PreUnitario - (d.PorcDescuento / 100 * vcConFac.PreUnitario)) + (@Redondeo- ((vcConFac.PreUnitario - (d.PorcDescuento / 100 * vcConFac.PreUnitario)) % @Redondeo))
            END  [Valor Calculado]

  FROM vcCliDebAuto
  JOIN vcConFac ON vcCliDebAuto.CodConFac = vcConFac.CodConFac
  JOIN vcClient ON vcCliDebAuto.CodCliente = vcClient.CodCliente
  JOIN xgDocDGI ON vcClient.TipDocume = xgDocDGI.CodDocDGI
  JOIN vcVended ON vcClient.CodCobrador = vcVended.CodVended
  JOIN DescuentoAntiguedadConceptos d on datediff(MM,vcCliDebAuto.PeriodoInicio,getdate()) >= d.AntiguedadDesde * 12 and 
                                             d.AntiguedadDesde * 12 < datediff(MM,vcCliDebAuto.PeriodoInicio,getdate())
  WHERE (vcConFac.CodRubro = CONVERT(INT,@CodRubro) OR  CONVERT(INT,@CodRubro)=0)
	AND (vcConFac.CodSubRub = @CodSubRub  or @CodSubRub = 0)
    AND vcCliDebAuto.CodCliente BETWEEN @ClienteDesde AND  @ClienteHasta
    AND vcCliDebAuto.PeriodoInicio <= @Vigencia
    AND vcClient.CueBloque <> 'Si'
    AND vcClient.CueInhabi <> 'Si'
    AND vcClient.TipEventu <> 1
    AND vcCliDebAuto.ValorUni > 0
    AND ((SELECT COUNT(1) FROM vcCliDebAuto vcCDA WHERE vcCDA.CodCliente =vcCliDebAuto.CodCliente AND vcCDA.PeriodoInicio > @Vigencia) = 0 )
	AND  '(' + replace(@Excluir,',',')()' + ')') not like '%(' + convert(varchar,vcclient.CodCliente)  + ')%'

GO
/****** Object:  StoredProcedure [dbo].[getCalculoConceptos]    Script Date: 19/01/2020 16:51:06 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[getCalculoConceptos]
@CodRubro int
AS
BEGIN
	SET NOCOUNT ON;
	
		DECLARE
		@columns NVARCHAR(MAX) = '',
		@sql     NVARCHAR(MAX) = '';

		
		if exists (SELECT * FROM sysobjects WHERE name = '##tabla2Conceptos')
		drop table ##tabla2Conceptos

 
		-- select the category names
		SELECT 
			@columns+=
			QUOTENAME(DesConcepto) + ','
		FROM (select distinct x.DesConcepto
			  from xgTipCon x 
			  join tipoconceptorubro tcr on tcr.CodTipConcepto = x.CodTipConcepto
			  where tcr.CodRubro = @CodRubro) l

 
		-- remove the last comma
		SET @columns = LEFT(@columns, LEN(@columns) - 1);

		
		-- construct dynamic SQL
		SET @sql ='
		create  table ##tabla2Conceptos([Cod] int,[Cobertura] varchar(200), [Descripcion Calculo] varchar(200), [Carencia] int, '+  replace(@columns,',','varchar(500),') + 'varchar(500))';

		EXECUTE sp_executesql @sql 
		
		insert into ##tabla2Conceptos (Cod,cobertura,[Descripcion Calculo],[Carencia])
		select CodSubRub,sr.Descripcion, (select top 1 cs.Descripcion from CalculoPorTipo_SubRubro cs where sr.CodSubRub = cs.CodSubRub order by len(cs.Descripcion) desc), 60
		from scSubRub sr
		where sr.CodRubro = @CodRubro

		declare @desc varchar(100), @cod int

		declare clasificacion cursor for
		select x.DesConcepto, x.CodTipConcepto 
		from xgTipCon x
		join tipoconceptorubro tcr on tcr.CodTipConcepto = x.CodTipConcepto
		where tcr.CodRubro = @CodRubro

		open clasificacion

		fetch next from clasificacion into @desc, @cod
		WHILE @@FETCH_STATUS = 0
		BEGIN

			set @sql = 'update ##tabla2Conceptos set [' + @desc + '] = (select convert(varchar,cts.CodConFac) + ''-'' + vccf.Concepto
			                                                   from CalculoPorTipo_SubRubro cts
															   join vcConFac vccf on cts.CodConFac = vccf.CodConFac
															   where cts.CodTipConcepto = ' + convert(varchar,@cod) + ' 
															   and cts.CodSubRub = Cod)'
			EXECUTE sp_executesql @sql 
			fetch next from clasificacion into @desc, @cod
		END
		close clasificacion
		deallocate clasificacion

		select * from ##tabla2Conceptos order by cod

		drop table ##tabla2Conceptos

END


GO
/****** Object:  StoredProcedure [dbo].[getCalculoFormulas]    Script Date: 19/01/2020 16:51:06 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[getCalculoFormulas]
@CodRubro int
AS
BEGIN
	SET NOCOUNT ON;
	
		DECLARE
		@columns NVARCHAR(MAX) = '',
		@sql     NVARCHAR(MAX) = '';
 
		-- select the category names
		SELECT 
			@columns+=
			QUOTENAME(DesConcepto) + ','
		FROM (select distinct x.DesConcepto
			  from xgTipCon x 
			  join tipoconceptorubro tcr on tcr.CodTipConcepto = x.CodTipConcepto
			  where tcr.CodRubro = @CodRubro) l

 
		-- remove the last comma
		SET @columns = LEFT(@columns, LEN(@columns) - 1);

		
		-- construct dynamic SQL
		SET @sql ='
		create  table ##tabla([Cod] int,[Cobertura] varchar(200), [Descripcion Calculo] varchar(200), [Carencia] int, '+  replace(@columns,',','varchar(500),') + 'varchar(500))';

		EXECUTE sp_executesql @sql 
		
		insert into ##tabla (Cod,cobertura,[Descripcion Calculo],[Carencia])
		select CodSubRub,sr.Descripcion, (select top 1 cs.Descripcion from CalculoPorTipo_SubRubro cs where sr.CodSubRub = cs.CodSubRub order by len(cs.Descripcion) desc), 60
		from scSubRub sr
		where sr.CodRubro = @CodRubro

		declare @desc varchar(100), @cod int

		declare clasificacion cursor for
		select x.DesConcepto, x.CodTipConcepto 
		from xgTipCon x
		join tipoconceptorubro tcr on tcr.CodTipConcepto = x.CodTipConcepto
		where tcr.CodRubro = @CodRubro

		open clasificacion

		fetch next from clasificacion into @desc, @cod
		WHILE @@FETCH_STATUS = 0
		BEGIN

			set @sql = 'update ##tabla set [' + @desc + '] = (select Formula from CalculoPorTipo_SubRubro where CodTipConcepto = ' + convert(varchar,@cod) + ' and CodSubRub = Cod)'
			EXECUTE sp_executesql @sql 
			fetch next from clasificacion into @desc, @cod
		END
		close clasificacion
		deallocate clasificacion

		select * from ##tabla order by cod

		drop table ##tabla

END



GO
/****** Object:  StoredProcedure [dbo].[getCalculoImporte]    Script Date: 19/01/2020 16:51:06 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
--exec getCalculoConceptos
CREATE PROCEDURE [dbo].[getCalculoImporte]
@CodRubro int
AS
BEGIN
	SET NOCOUNT ON;

			--drop table ##CostoPlan
			--drop table ##calculoConcepto
			SELECT xgtc.CodTipConcepto, xgtc.DesConcepto, sum(dp.Importe) TotalPlan, sum(dp.Importe)*0.011 CostoPlan into ##CostoPlan
			FROM xgTipCon xgtc
			left join Prestacion p on p.CodTipConcepto = xgtc.CodTipConcepto
			left join DetPrestacion dp on dp.PrestacionID = p.PrestacionID
			join tipoconceptorubro tcr on tcr.CodTipConcepto = xgtc.CodTipConcepto
			where tcr.CodRubro = @CodRubro
			group by xgtc.CodTipConcepto, xgtc.DesConcepto

			select ---(select count(*) from CalculoPorTipo_SubRubro sc1 where sc1.Formula like '%' + sc.Alias + '%')Cant ,
				   sc.*  into ##calculoConcepto
			from CalculoPorTipo_SubRubro sc
			join scSubRub sr on sr.CodSubRub = sc.CodSubRub
			join scRubros r on r.codRubro = sr.CodSubRub
			where sr.CodRubro = @CodRubro

			order by 1 desc

			update c
			set Formula = replace(c.Formula,'#CP', convert(varchar,cp.CostoPlan))
			from ##calculoConcepto c
			join ##CostoPlan cp on cp.CodTipConcepto = c.CodTipConcepto


			while exists (select * 
							from ##calculoConcepto c 
						   where formula like '%#%' and Formula not like '%' + Alias + '%' 
							 and exists(select top 1 cc.alias from ##calculoConcepto cc where c.Formula like '%' + cc.Alias + '%' and cc.Formula not like '%#%' and len( cc.formula) > 0))
			begin

				update c
				set formula = replace(formula,(select top 1 cc.alias from ##calculoConcepto cc where c.Formula like '%' + cc.Alias + '%' and cc.Formula not like '%#%' and len( cc.formula) > 0),(select top 1 cc.Formula from ##calculoConcepto cc where c.Formula like '%' + cc.Alias + '%' and cc.Formula not like '%#%' and len( cc.formula) > 0))
				from ##calculoConcepto c 
				where formula like '%#%' and Formula not like '%' + Alias + '%' 
				and exists(select top 1 cc.alias from ##calculoConcepto cc where c.Formula like '%' + cc.Alias + '%' and cc.Formula not like '%#%' and len( cc.formula) > 0)

			end

			

					declare @formula nvarchar(800), @subRub int, @codTipConcepto int, @sql2 nvarchar(800)

					declare calculo cursor for
					select c.CodSubRub,c.CodTipConcepto,c.Formula
					from ##calculoConcepto c
					where c.Formula not like '%#%'
		
					open calculo

					fetch next from calculo into @subRub, @codTipConcepto, @formula
					WHILE @@FETCH_STATUS = 0
					BEGIN
						set @sql2 = 'update ##calculoConcepto set Importe = ' + @formula + ' where CodTipConcepto = ' + convert(varchar,@codTipConcepto) + ' and CodSubRub = ' + convert(varchar,@subRub)
						EXECUTE sp_executesql @sql2
			
						fetch next from calculo into @subRub, @codTipConcepto, @formula
					END
					close calculo
					deallocate calculo

					/*  Muestro los resultados   */

					DECLARE
					@columns NVARCHAR(MAX) = '',
					@sql     NVARCHAR(MAX) = '';
 
					-- select the category names
					SELECT 
						@columns+=
						QUOTENAME(DesConcepto) + ','
					FROM (select distinct x.DesConcepto
						  from xgTipCon x 
						  join tipoconceptorubro tcr on tcr.CodTipConcepto = x.CodTipConcepto
						  where tcr.CodRubro = @CodRubro) l

 
					-- remove the last comma
					SET @columns = LEFT(@columns, LEN(@columns) - 1);

		
					-- construct dynamic SQL
					SET @sql ='
					create  table ##tablaImporte([Cod] int,[Cobertura] varchar(200), [Descripcion Calculo] varchar(200), [Carencia] int, '+  replace(@columns,',','varchar(500),') + 'varchar(500))';

					EXECUTE sp_executesql @sql 
		
					insert into ##tablaImporte (Cod,cobertura,[Descripcion Calculo],[Carencia])
					select CodSubRub,sr.Descripcion, (select top 1 cs.Descripcion from CalculoPorTipo_SubRubro cs where sr.CodSubRub = cs.CodSubRub order by len(cs.Descripcion) desc), 60
					from scSubRub sr
					where sr.CodRubro = @CodRubro 

					declare @desc varchar(100), @cod int

					declare clasificacion cursor for
					select x.DesConcepto, x.CodTipConcepto 
					from xgTipCon x
					join tipoconceptorubro tcr on tcr.CodTipConcepto = x.CodTipConcepto
					where tcr.CodRubro = @CodRubro

					open clasificacion

					fetch next from clasificacion into @desc, @cod
					WHILE @@FETCH_STATUS = 0
					BEGIN

						set @sql = 'update ##tablaImporte set [' + @desc + '] = (select cts.Importe
																		   from ##calculoConcepto cts
																		   left join vcConFac vccf on cts.CodConFac = vccf.CodConFac
																		   where cts.CodTipConcepto = ' + convert(varchar,@cod) + ' 
																		   and cts.CodSubRub = Cod)'
						
						EXECUTE sp_executesql @sql 
						fetch next from clasificacion into @desc, @cod
					END
					close clasificacion
					deallocate clasificacion

					select * from ##tablaImporte order by cod

					drop table ##tablaImporte



			drop table ##CostoPlan
			drop table ##calculoConcepto
END
GO
/****** Object:  StoredProcedure [dbo].[GetConceptByID]    Script Date: 19/01/2020 16:51:06 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[GetConceptByID]
	@codConFac int = 0
AS
BEGIN
	SET NOCOUNT ON;

	SELECT vccf.CodConFac, vccf.Concepto, vccf.CodRubro, vccf.CodSubRub, vccf.CodTipConcepto,vccf.PreUnitario
	FROM vcConFac vccf 
	WHERE vccf.CodConFac = @codConFac

END

GO
/****** Object:  StoredProcedure [dbo].[GetConceptsAll]    Script Date: 19/01/2020 16:51:06 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[GetConceptsAll]
	@CodRubro int = 0, @CodSubRubro int = 0, @CodTipConcepto int = 0
AS
BEGIN
	SET NOCOUNT ON;

	SELECT vccf.CodConFac, vccf.Concepto, vccf.CodRubro, vccf.CodSubRub, vccf.CodTipConcepto 
	FROM vcConFac vccf 

END

GO
/****** Object:  StoredProcedure [dbo].[GetConcetosByFilters]    Script Date: 19/01/2020 16:51:06 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[GetConcetosByFilters]
	@CodRubro int = 0, @CodSubRubro int = 0, @CodTipConcepto int = 0, @FoltrarTipo bit
AS
BEGIN
	SET NOCOUNT ON;

	SELECT 0 CodConFac,'Sin definir' Concepto,0 CodRubro,0 CodSubRub,0 CodTipConceptoy
	UNION
	SELECT vccf.CodConFac, vccf.Concepto, vccf.CodRubro, vccf.CodSubRub, vccf.CodTipConcepto 
	FROM vcConFac vccf 
	LEFT JOIN scSubRub scsr ON vccf.CodSubRub = scsr.CodSubRub
	LEFT JOIN scRubros scr ON COALESCE(vccf.CodRubro,scsr.CodRubro) = scr.CodRubro
	LEFT JOIN xgTipCon xgtc ON vccf.CodTipConcepto = xgtc.CodTipConcepto
	WHERE	(vccf.CodRubro = @CodRubro or (@CodRubro = 0 and coalesce(vccf.CodRubro,0) = 0)) AND 
			(vccf.CodSubRub = @CodSubRubro OR (@CodSubRubro = 0 and coalesce(vccf.CodSubRub,0) = 0)) AND 
			(vccf.CodTipConcepto = @CodTipConcepto or (@CodTipConcepto = 0 and coalesce(vccf.CodTipConcepto,0) = 0) or 
			 (@FoltrarTipo = 0 and 
			  not exists(select * from vcconfac vcf2 where vcf2.CodConFac = vccf.CodConFac and coalesce(vcf2.CodTipConcepto,0) <> 0  and vcf2.CodRubro = @CodRubro and vcf2.CodSubRub = @CodSubRubro and vcf2.CodTipConcepto = @CodTipConcepto)))

END



GO
/****** Object:  StoredProcedure [dbo].[GetConcetpByID]    Script Date: 19/01/2020 16:51:06 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[GetConcetpByID]
	@codConFac int = 0
AS
BEGIN
	SET NOCOUNT ON;

	SELECT vccf.CodConFac, vccf.Concepto, vccf.CodRubro, vccf.CodSubRub, vccf.CodTipConcepto 
	FROM vcConFac vccf 
	WHERE vccf.CodConFac = @codConFac

END

GO
/****** Object:  StoredProcedure [dbo].[GetConcetsByFilters]    Script Date: 19/01/2020 16:51:06 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[GetConcetsByFilters]
	@CodRubro int = 0, @CodSubRubro int = 0, @CodTipConcepto int = 0
AS
BEGIN
	SET NOCOUNT ON;

	SELECT vccf.CodConFac, vccf.Concepto, vccf.CodRubro, vccf.CodSubRub, vccf.CodTipConcepto 
	FROM vcConFac vccf 
	LEFT JOIN scSubRub scsr ON vccf.CodSubRub = scsr.CodSubRub
	LEFT JOIN scRubros scr ON COALESCE(vccf.CodRubro,scsr.CodRubro) = scr.CodRubro
	LEFT JOIN xgTipCon xgtc ON vccf.CodTipConcepto = xgtc.CodTipConcepto
	WHERE (vccf.CodRubro = @CodRubro or @CodRubro = 0) AND (vccf.CodSubRub = @CodSubRubro OR @CodSubRubro = 0) AND (vccf.CodTipConcepto = @CodTipConcepto)
END

GO
/****** Object:  StoredProcedure [dbo].[getDatosCalculo]    Script Date: 19/01/2020 16:51:06 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create PROCEDURE [dbo].[getDatosCalculo]
  @CodTipConcepto int, @CodSubRub int
AS
BEGIN

   SELECT *
   FROM CalculoPorTipo_SubRubro c
   WHERE c.CodTipConcepto = @CodTipConcepto AND
   c.CodSubRub = @CodSubRub

END
GO
/****** Object:  StoredProcedure [dbo].[GetDetConceptsAll]    Script Date: 19/01/2020 16:51:06 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[GetDetConceptsAll]
@CodRubro int
AS
BEGIN
	SET NOCOUNT ON;
	select vccf.CodConFac [Código], vccf.Concepto, scr.Descripcion Rubro, scsr.Descripcion SubRbro, xgtc.DesConcepto TipoConcepto
	from vcConFac vccf
	LEFT join scRubros scr on vccf.CodRubro = scr.CodRubro
	LEFT join scSubRub scsr on scsr.CodSubRub = vccf.CodSubRub
	LEFT join xgTipCon xgtc on xgtc.CodTipConcepto = vccf.CodTipConcepto
	where scr.CodRubro = @CodRubro
END

GO
/****** Object:  StoredProcedure [dbo].[GetDetPrestacion]    Script Date: 19/01/2020 16:51:06 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[GetDetPrestacion] 
@CodRubro int
AS
BEGIN
	SET NOCOUNT ON;
	
		DECLARE
		@columns NVARCHAR(MAX) = '',
		@sql     NVARCHAR(MAX) = '';
 
   IF EXISTS(select distinct concepto
			  from vcconfac
			  where CodSubRub = 9999
			  and CodRubro = @CodRubro)
   BEGIN
		SELECT 
			@columns+=
			QUOTENAME(Concepto) + ','

		FROM (select distinct concepto
			  from vcconfac
			  where CodSubRub = 9999
			  and CodRubro = @CodRubro) l

 
		-- remove the last comma
		SET @columns = LEFT(@columns, LEN(@columns) - 1);


		-- construct dynamic SQL
		SET @sql ='
		declare @tabla table(Clasificacion varchar(200),Descripcion varchar(200),'+  replace(@columns,',','float,') + 'float)

		insert into @tabla
		SELECT * FROM  
		(
			SELECT coalesce(x.DesConcepto,'''') as [Clasificacion] ,coalesce(p.Descripcion,'''') Descripcion, vccf.Concepto,Importe
			FROM vcconfac vccf
			LEFT join DetPrestacion dp on dp.CodConFac = vccf.CodConFac 
			LEFT join prestacion p on p.PrestacionID = dp.PrestacionID
			LEFT join xgTipCon x on x.CodTipConcepto = p.CodTipConcepto
			WHERE vccf.codrubro = ' + convert(varchar,@CodRubro) + '
			AND vccf.CodSubRub = 9999
		) t
		PIVOT(
			sum(Importe)
			FOR Concepto IN ('+ @columns +')
		) AS pivot_table

		select *,'+ replace(@columns,',','+') +' as [Total Plan], ('+ replace(@columns,',','+')  +') * 0.011 as [Costo Plan] from @tabla order by 1
		';
 

		EXECUTE sp_executesql @sql 
	END

END
GO
/****** Object:  StoredProcedure [dbo].[GetDetRubrosAll]    Script Date: 19/01/2020 16:51:06 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[GetDetRubrosAll]
AS
BEGIN
	SET NOCOUNT ON;
	select CodRubro [Rubro], Descripcion
	from scRubros
END

GO
/****** Object:  StoredProcedure [dbo].[GetDetSubRubrosAll]    Script Date: 19/01/2020 16:51:06 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[GetDetSubRubrosAll]
AS
BEGIN
	SET NOCOUNT ON;
	SELECT scsr.CodSubRub [Sub Rubro], scsr.Descripcion [Descripcion],scr.Descripcion [Rubro]
	FROM scSubRub scsr
	LEFT JOIN scRubros scr on scr.CodRubro = scsr.CodRubro
END

GO
/****** Object:  StoredProcedure [dbo].[GetDetTipoConceptosAll]    Script Date: 19/01/2020 16:51:06 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[GetDetTipoConceptosAll]
AS
BEGIN
	SET NOCOUNT ON;
	
	SELECT xtc.CodTipConcepto [Tipo Concepto],xtc.DesConcepto [Descripcion],scr.Descripcion Rubro
	FROM xgTipCon xtc
	left join tipoConceptoRubro tcr on  tcr.CodTipConcepto = xtc.CodTipConcepto
	left join scRubros scr on tcr.CodRubro = scr.CodRubro
END

GO
/****** Object:  StoredProcedure [dbo].[getFormulaPorTipo]    Script Date: 19/01/2020 16:51:06 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[getFormulaPorTipo]
AS
BEGIN
	SET NOCOUNT ON;
	
		DECLARE
		@columns NVARCHAR(MAX) = '',
		@sql     NVARCHAR(MAX) = '';
 
		-- select the category names
		SELECT 
			@columns+=
			QUOTENAME(DesConcepto) + ','
		FROM (select distinct x.DesConcepto
			  from xgTipCon x ) l

 
		-- remove the last comma
		SET @columns = LEFT(@columns, LEN(@columns) - 1);

		
		-- construct dynamic SQL
		SET @sql ='
		create  table ##tabla([Cod] int,[Cobertura] varchar(200), [Descripcion Calculo] varchar(200), [Carencia] int, '+  replace(@columns,',','varchar(500),') + 'varchar(500))';

		EXECUTE sp_executesql @sql 
		
		insert into ##tabla (Cod,cobertura,[Descripcion Calculo],[Carencia])
		select CodSubRub,sr.Descripcion, '', 60
		from scSubRub sr

		declare @desc varchar(100), @cod int

		declare clasificacion cursor for
		select DesConcepto, CodTipConcepto from xgTipCon

		open clasificacion

		fetch next from clasificacion into @desc, @cod
		WHILE @@FETCH_STATUS = 0
		BEGIN

			set @sql = 'update ##tabla set [' + @desc + '] = (select Formula from CalculoPorTipo_SubRubro where CodTipConcepto = ' + convert(varchar,@cod) + ' and CodSubRub = Cod)'
			EXECUTE sp_executesql @sql 
			fetch next from clasificacion into @desc, @cod
		END
		close clasificacion
		deallocate clasificacion

		select * from ##tabla order by cod

		drop table ##tabla

END

GO
/****** Object:  StoredProcedure [dbo].[GetRubroByID]    Script Date: 19/01/2020 16:51:06 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[GetRubroByID]
	@CodRubro int = 0
AS
BEGIN
	SET NOCOUNT ON;

	SELECT scr.CodRubro,Descripcion
	FROM scRubros scr
	WHERE scr.CodRubro = @codRubro

END

GO
/****** Object:  StoredProcedure [dbo].[GetRubrosAll]    Script Date: 19/01/2020 16:51:06 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create PROCEDURE [dbo].[GetRubrosAll] 
	--@DetCostoTipConID int = 0, @CabCostoTipConID int = 0, @CodConFac int = 0, @FechaAlta datetime, @UsuarioAlta varchar(50), @FechaBaja datetime, @UsuarioBaja varchar(50), @Observaciones varchar(500)
AS
BEGIN
	SET NOCOUNT ON;

	select scr.CodRubro, scr.Descripcion from scRubros scr

	--if @DetCostoTipConID <> 0
	--begin
	--	insert into DetCostoTipCon (DetCostoTipConcID,CabCostoTipConID,CodConFac,FechaAlta,UsuarioAlta)
	--	values (@DetCostoTipConID,@CabCostoTipConID,@CodConFac,@FechaAlta,@UsuarioAlta)
	--end
	--else
	--begin
	--	update DetCostoTipCon
	--	set CodConFac = @CodConFac,
	--		FechaBaja = @FechaBaja,
	--		UsuarioBaja = @UsuarioBaja
	--end
END

GO
/****** Object:  StoredProcedure [dbo].[GetSubRubroByID]    Script Date: 19/01/2020 16:51:06 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[GetSubRubroByID]
	@CodSubRub int = 0
AS
BEGIN
	SET NOCOUNT ON;
	
	SELECT scsr.CodRubro [CodSubRub],scsr.Descripcion [Descripcion], scr.CodRubro [CodRubro]
	FROM scSubRub scsr
	left join scRubros scr on scr.CodRubro = scsr.CodRubro
	WHERE scsr.CodSubRub = @codSubRub

END

GO
/****** Object:  StoredProcedure [dbo].[GetSubRubrosAll]    Script Date: 19/01/2020 16:51:06 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create PROCEDURE [dbo].[GetSubRubrosAll]
AS
BEGIN
	SET NOCOUNT ON;

	select sr.CodSubRub, sr.CodRubro, sr.Descripcion 
	from scSubRub sr 

	--if @DetCostoTipConID <> 0
	--begin
	--	insert into DetCostoTipCon (DetCostoTipConcID,CabCostoTipConID,CodConFac,FechaAlta,UsuarioAlta)
	--	values (@DetCostoTipConID,@CabCostoTipConID,@CodConFac,@FechaAlta,@UsuarioAlta)
	--end
	--else
	--begin
	--	update DetCostoTipCon
	--	set CodConFac = @CodConFac,
	--		FechaBaja = @FechaBaja,
	--		UsuarioBaja = @UsuarioBaja
	--end
END

GO
/****** Object:  StoredProcedure [dbo].[GetSubRubrosByFilters]    Script Date: 19/01/2020 16:51:06 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[GetSubRubrosByFilters]
	@CodRubro int = 0
	--@DetCostoTipConID int = 0, @CabCostoTipConID int = 0, @CodConFac int = 0, @FechaAlta datetime, @UsuarioAlta varchar(50), @FechaBaja datetime, @UsuarioBaja varchar(50), @Observaciones varchar(500)
AS
BEGIN
	SET NOCOUNT ON;

	select sr.CodSubRub, sr.CodRubro, sr.Descripcion ,r.Descripcion RubroDescripcion
	from scSubRub sr 
	join scRubros r on sr.CodRubro = r.CodRubro
	where r.CodRubro = @CodRubro OR @CodRubro = 0

	--if @DetCostoTipConID <> 0
	--begin
	--	insert into DetCostoTipCon (DetCostoTipConcID,CabCostoTipConID,CodConFac,FechaAlta,UsuarioAlta)
	--	values (@DetCostoTipConID,@CabCostoTipConID,@CodConFac,@FechaAlta,@UsuarioAlta)
	--end
	--else
	--begin
	--	update DetCostoTipCon
	--	set CodConFac = @CodConFac,
	--		FechaBaja = @FechaBaja,
	--		UsuarioBaja = @UsuarioBaja
	--end
END

GO
/****** Object:  StoredProcedure [dbo].[GetTipoConceptoByID]    Script Date: 19/01/2020 16:51:06 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[GetTipoConceptoByID]
	@CodTipConcepto int = 0
AS
BEGIN
	SET NOCOUNT ON;
	
	SELECT xtc.CodTipConcepto, xtc.DesConcepto, scr.Descripcion Rubro, tcr.CodRubro
	FROM xgTipCon xtc
	left join tipoConceptoRubro tcr on  tcr.CodTipConcepto = xtc.CodTipConcepto
	left join scRubros scr on tcr.CodRubro = scr.CodRubro
	WHERE xtc.CodTipConcepto = @CodTipConcepto

END

GO
/****** Object:  StoredProcedure [dbo].[GetTiposConceptosAll]    Script Date: 19/01/2020 16:51:06 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[GetTiposConceptosAll]
AS
BEGIN
	SET NOCOUNT ON;

	SELECT xgtc.CodTipConcepto, xgtc.DesConcepto, sum(dp.Importe) TotalPlan, sum(dp.Importe)*0.011 CostoPlan
	FROM xgTipCon xgtc
	join Prestacion p on p.CodTipConcepto = xgtc.CodTipConcepto
	join DetPrestacion dp on p.PrestacionID = dp.PrestacionID
	group by xgtc.CodTipConcepto, xgtc.DesConcepto
END

GO
/****** Object:  StoredProcedure [dbo].[GetTiposConceptosByRubro]    Script Date: 19/01/2020 16:51:06 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[GetTiposConceptosByRubro]
@CodRubro int
AS
BEGIN
	SET NOCOUNT ON;

	SELECT xgtc.CodTipConcepto, xgtc.DesConcepto, sum(dp.Importe) TotalPlan, sum(dp.Importe)*0.011 CostoPlan
	FROM xgTipCon xgtc
	join tipoConceptoRubro tcr on tcr.CodTipConcepto = xgtc.CodTipConcepto
	left join Prestacion p on p.CodTipConcepto = xgtc.CodTipConcepto
	left join DetPrestacion dp on p.PrestacionID = dp.PrestacionID
	where @CodRubro = tcr.CodRubro
	group by xgtc.CodTipConcepto, xgtc.DesConcepto
END



GO
/****** Object:  StoredProcedure [dbo].[InsertOrUpdateCabCostoTipCon]    Script Date: 19/01/2020 16:51:06 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[InsertOrUpdateCabCostoTipCon] 
	@CabCostoTipConID int = 0, @CodTipConcepto int = 0, @Descripcion varchar(100), @Importe decimal(15,2), @FechaAlta datetime, @UsuarioAlta varchar(50), @FechaBaja datetime, @UsuarioBaja varchar(50)
AS
BEGIN
	SET NOCOUNT ON;

	if @CabCostoTipConID <> 0
	begin
		insert into CabCostoTipCon (CabCostoTipConID,CodTipConcepto,Descripcion,Importe,FechaAlta,UsuarioAlta)
		values (@CabCostoTipConID,@CodTipConcepto,@Descripcion,@Importe,@FechaAlta,@UsuarioAlta)
	end
	else
	begin
		update CabCostoTipCon
		set CodTipConcepto = @CodTipConcepto,
		    Descripcion = @Descripcion,
			Importe = @Importe,
			FechaBaja = @FechaBaja,
			UsuarioBaja = @UsuarioBaja
	end
END

GO
/****** Object:  StoredProcedure [dbo].[insertOrUpdateConcept]    Script Date: 19/01/2020 16:51:06 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[insertOrUpdateConcept]
	@CodConFac int = 0,@Concepto varchar(41),@CodRubro int, @CodSubRub int, @CodTipConcepto int, @PreUnitario float
AS
BEGIN
	SET NOCOUNT ON;

	if exists(SELECT *
				FROM vcConFac vccf 
				WHERE vccf.CodConFac = @codConFac)
	begin
		update vccf
		set vccf.CodConFac = @CodConFac, 
			vccf.Concepto = @Concepto,
			vccf.CodRubro = @CodRubro, 
			vccf.CodSubRub = @CodSubRub, 
			vccf.CodTipConcepto = @CodTipConcepto,
			vccf.PreUnitario = @PreUnitario
		FROM vcConFac vccf 
		WHERE vccf.CodConFac = @codConFac
	end

	else
	begin
		insert into vcConFac(CodConFac, Concepto, CodRubro, CodSubRub, CodTipConcepto,PreUnitario)
		values(@CodConFac ,@Concepto ,@CodRubro , @CodSubRub , @CodTipConcepto , @PreUnitario )
	end

	SELECT vccf.CodConFac, vccf.Concepto, vccf.CodRubro, vccf.CodSubRub, vccf.CodTipConcepto,vccf.PreUnitario
	FROM vcConFac vccf 
	WHERE vccf.CodConFac = @codConFac

END

GO
/****** Object:  StoredProcedure [dbo].[InsertOrUpdateDetCostoTipCon]    Script Date: 19/01/2020 16:51:06 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[InsertOrUpdateDetCostoTipCon] 
	@DetCostoTipConID int = 0, @CabCostoTipConID int = 0, @CodConFac int = 0, @FechaAlta datetime, @UsuarioAlta varchar(50), @FechaBaja datetime, @UsuarioBaja varchar(50), @Observaciones varchar(500)
AS
BEGIN
	SET NOCOUNT ON;

	if @DetCostoTipConID <> 0
	begin
		insert into DetCostoTipCon (DetCostoTipConcID,CabCostoTipConID,CodConFac,FechaAlta,UsuarioAlta)
		values (@DetCostoTipConID,@CabCostoTipConID,@CodConFac,@FechaAlta,@UsuarioAlta)
	end
	else
	begin
		update DetCostoTipCon
		set CodConFac = @CodConFac,
			FechaBaja = @FechaBaja,
			UsuarioBaja = @UsuarioBaja
	end
END

GO
/****** Object:  StoredProcedure [dbo].[insertOrUpdateDetPrestacion]    Script Date: 19/01/2020 16:51:06 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[insertOrUpdateDetPrestacion] 
	@PrestacionID int, @TipoConceltoID int = 0, @CodConFac int = 0, @Importe float = 0,@Usuario varchar(50)
AS
BEGIN
	SET NOCOUNT ON;

	
	if not exists(select * from DetPrestacion d where d.PrestacionID = @TipoConceltoID and d.CodConFac = @CodConFac)
	begin
		insert into DetPrestacion (PrestacionID,CodConFac,Importe,FechaAlta,UsuarioAlta)
		values (@TipoConceltoID,@CodConFac,@Importe,getdate(),@Usuario)
	end
	else
	begin
		update DetPrestacion 
		set CodConFac = @CodConFac,
			Importe = @Importe,
			FechaModificacion = getdate(),
			UsuarioModificacion = @Usuario
		where PrestacionID = @PrestacionID
		and CodConFac = @CodConFac
	end

END
GO
/****** Object:  StoredProcedure [dbo].[insertOrUpdatePrestacion]    Script Date: 19/01/2020 16:51:06 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[insertOrUpdatePrestacion] 
	@PrestacionID int, @TipoConceltoID int = 0,@Descripcion varchar(100), @Usuario varchar(50)
AS
BEGIN
	SET NOCOUNT ON;

	
	if not exists(select * from Prestacion d where d.PrestacionID = @TipoConceltoID)
	begin
		insert into Prestacion (PrestacionID,CodTipConcepto,Descripcion,FechaAlta,UsuarioAlta,ImporteTotal,CostoPlan)
		values (@TipoConceltoID,@TipoConceltoID,@Descripcion,getdate(),@Usuario,0,0)
	end
	else
	begin
		update Prestacion 
		set @Descripcion = @Descripcion,
			FechaModificacion = getdate(),
			UsuarioModificacion = @Usuario
		where PrestacionID = @PrestacionID

	end

END
GO
/****** Object:  StoredProcedure [dbo].[insertOrUpdateRubro]    Script Date: 19/01/2020 16:51:06 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[insertOrUpdateRubro]
	@CodRubro int, @Descripcion varchar(31)
AS
BEGIN
	SET NOCOUNT ON;

	if exists(SELECT *
				FROM scRubros scr
				WHERE scr.CodRubro = @CodRubro)
	begin
		update scr
		set scr.Descripcion = @Descripcion
		FROM scRubros scr
		WHERE scr.CodRubro = @CodRubro
	end

	else
	begin
		insert into scRubros(CodRubro,Descripcion)
		values(@CodRubro,@Descripcion)
	end

	select CodRubro [Rubro], Descripcion
	from scRubros

END

GO
/****** Object:  StoredProcedure [dbo].[insertOrUpdateSubRubro]    Script Date: 19/01/2020 16:51:06 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[insertOrUpdateSubRubro]
	@CodSubRub int, @Descripcion varchar(31) ,@CodRubro int
AS
BEGIN
	SET NOCOUNT ON;

	if exists(SELECT *
				FROM scSubRub scsr
				WHERE scsr.CodSubRub = @CodSubRub)
	begin
		update scsr
		set scsr.Descripcion = @Descripcion,
			scsr.CodRubro = @CodRubro
		FROM scSubRub scsr
		WHERE scsr.CodSubRub = @CodSubRub
	end

	else
	begin
		insert into scSubRub(CodSubRub,Descripcion,CodRubro)
		values(@CodSubRub,@Descripcion,@CodRubro)
	end

	SELECT scsr.CodSubRub [Sub Rubro], scsr.Descripcion [Descripcion],scr.Descripcion [Rubro]
	FROM scSubRub scsr
	LEFT JOIN scRubros scr on scr.CodRubro = scsr.CodRubro

END

GO
/****** Object:  StoredProcedure [dbo].[insertOrUpdateTipoConcepto]    Script Date: 19/01/2020 16:51:06 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[insertOrUpdateTipoConcepto]
	@CodTipConcepto int,@DesConcepto varchar(31),@CodRubro int
AS
BEGIN
	SET NOCOUNT ON;

	if exists(SELECT *
				FROM xgTipCon xtc
				WHERE xtc.CodTipConcepto = @CodTipConcepto)
	begin
		UPDATE xtc
		SET xtc.CodTipConcepto = @CodTipConcepto,
			xtc.DesConcepto = @DesConcepto
		FROM xgTipCon xtc
		WHERE xtc.CodTipConcepto = @CodTipConcepto
	end

	else
	begin
		insert into xgTipCon
		values(@CodTipConcepto,@DesConcepto)
	end

	if exists(select * from tipoConceptoRubro tcr where tcr.CodTipConcepto = @CodTipConcepto)
	begin
		update tipoConceptoRubro set CodRubro = @CodRubro 
	end
	else 
	begin
		insert into tipoConceptoRubro values(@CodTipConcepto,@CodRubro)
	end

	SELECT xtc.CodTipConcepto [Tipo Concepto],xtc.DesConcepto [Descripcion],scr.Descripcion Rubro
	FROM xgTipCon xtc
	left join tipoConceptoRubro tcr on  tcr.CodTipConcepto = xtc.CodTipConcepto
	left join scRubros scr on tcr.CodRubro = scr.CodRubro
	--WHERE xtc.CodTipConcepto = @CodTipConcepto

END

GO
/****** Object:  StoredProcedure [dbo].[Planeon_CalcularMayorClientesPesos]    Script Date: 19/01/2020 16:51:06 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description: <Description,,>
-- =============================================
CREATE PROCEDURE [dbo].[Planeon_CalcularMayorClientesPesos]
	-- Add the parameters for the stored procedure here
	@Par_CodCliente INT,
	@Par_Mayor VARCHAR(3) /*  */
AS
BEGIN
	 -- qa 1
		UPDATE vmComCab
		   SET HorComprob = 0
		  FROM vmComCab
		  JOIN omIdComp ON vmComCab.IdCompro = omIdComp.Id_Final
		 WHERE vmComCab.HorComprob <> 0
		   AND vmComCab.CodCliente = @Par_CodCliente 

-- 
----		SELECT ClaveDeRefer,  DATEDIFF(dd,'28/12/1800',vmComCab.FecComprob), vmComCab.IdCompro ,
----		   vmComCab.FecComprob As Fecha
----		 , vmComCab.CodComVta
----		 , vcDefCom.Descripcion 
----		 , vmComCab.TotalDebito
----		 , vmComCab.TotalCredito
----		 , vmComCab.SaldoFinal
----		 , vmComCab.TotalComprob
----		 , vmComCab.NetoCobrado
----		 , vcDefCom.TipComCorresp
----		 , vmComCab.DebeHaber
----
----		  FROM vmComCab 
----		  JOIN vcDefCom ON vmComCab.CodComVta = vcDefCom.CodDefCom
----		 WHERE vcDefCom.AfeCtaCte = 'Si'
----		   AND vmComCab.CodCliente = @Par_CodCliente
----		-- and	 vcDefCom.TipComCorresp <> 'REC' and vmComCab.NetoCobrado <> 0
----		 ORDER BY ClaveDeRefer -- vmComCab.FecComprob, vmComCab.HorComprob, vmComCab.IdCompro

		-- Seteo los campos TotalDebito y Credito
		-- BEGIN TRAN  --  commit
		UPDATE vmComCab
		   SET vmComCab.TotalDebito = (CASE WHEN vmComCab.DebeHaber = 'Debe'  
							     THEN vmComCab.TotalComprob
						    WHEN vmComCab.DebeHaber = 'Haber' AND vcDefCom.TipComCorresp = 'NCR' AND vmComCab.NetoCobrado <> 0 
							     THEN vmComCab.NetoCobrado
						    ELSE 0
					       END ) ,
		       vmComCab.TotalCredito = (CASE WHEN vmComCab.DebeHaber = 'Haber' 
							 THEN vmComCab.TotalComprob
						     WHEN vmComCab.DebeHaber = 'Debe' AND vcDefCom.TipComCorresp <> 'REC' AND vmComCab.NetoCobrado <> 0 
							 THEN vmComCab.NetoCobrado
						     ELSE 0
						END ) 
		  FROM vmComCab 
		  JOIN vcDefCom ON vmComCab.CodComVta = vcDefCom.CodDefCom
		 WHERE vcDefCom.AfeCtaCte = 'Si'
		   AND vmComCab.CodCliente = @Par_CodCliente


		-- CALCULO DE MAYOR
		-- ======================
	IF @Par_Mayor = 'Si'
	BEGIN
			DECLARE @Loc_IdCompro BIGINT
				  , @Loc_Clave VARCHAR(31) 
				  , @Loc_Saldo DECIMAL(14,2)
				  , @Loc_Debe DECIMAL(14,2)
				  , @Loc_Haber DECIMAL(14,2)
				  , @Loc_MaxClave VARCHAR(31)

			SET @Loc_Clave = ''
			SET @Loc_Saldo = 0
			SET @Loc_Debe = 0
			SET @Loc_Haber = 0

			-- qp 1 = SET ClaveDeRefer
			UPDATE vmComCab
			   SET ClaveDeRefer = + RIGHT('000000' + CONVERT(VARCHAR(7),DATEDIFF(dd,'28/12/1800',vmComCab.FecComprob)),6) 
								  + RIGHT('00000000'+CONVERT(VARCHAR(8),HorComprob),7) 
								  + RIGHT('00000000'+CONVERT(VARCHAR(16),IdCompro),15)
			  FROM vmComCab
			 WHERE vmComCab.CodCliente = @Par_CodCliente 

			-- QP 2 = Obtener MAX(ClaveDeRefer)
			SELECT @Loc_MaxClave = MAX(vmComCab.ClaveDeRefer) 
			   FROM vmComCab
			  JOIN vcDefCom ON vmComCab.CodComVta = vcDefCom.CodDefCom
			 WHERE vcDefCom.AfeCtaCte = 'Si'
			   AND vmComCab.CodCliente = @Par_CodCliente

			-- QP 3 = SET Campo SaldoFinal
			WHILE @Loc_Clave < @Loc_MaxClave
			  BEGIN 
					SELECT TOP 1
						 @Loc_Clave = vmComCab.ClaveDeRefer
					   , @Loc_IdCompro = vmComCab.IdCompro
					   , @Loc_Saldo = @Loc_Saldo + vmComCab.TotalDebito  - vmComCab.TotalCredito
					  FROM vmComCab 
					  JOIN vcDefCom ON vmComCab.CodComVta = vcDefCom.CodDefCom
					 WHERE vcDefCom.AfeCtaCte = 'Si'
					   AND vmComCab.CodCliente = @Par_CodCliente
					   AND vmComCab.ClaveDeRefer > @Loc_Clave
					 ORDER BY vmComCab.ClaveDeRefer -- vmComCab.FecComprob, vmComCab.IdCompro
			     
			--	     PRINT STR(@Loc_IdCompro ,14) + '  -  ' + STR(@Loc_Saldo,16)
			--	 SET @Loc_Saldo = @Loc_Saldo + @Loc_Debe - @Loc_Haber

				   UPDATE vmComCab
					  SET vmComCab.SaldoFinal = @Loc_Saldo
					WHERE vmComCab.IdCompro = @Loc_IdCompro

				  IF @Loc_Clave >= @Loc_MaxClave
					   BREAK

			  END /* WHILE @Loc_Clave < @Loc_MaxClave */

	END /* IF @Par_Mayor = 'Si' */

END /* PROCEDURE */ 

GO
/****** Object:  StoredProcedure [dbo].[PLANEON_Log_DisableTriggers]    Script Date: 19/01/2020 16:51:06 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[PLANEON_Log_DisableTriggers]
AS
BEGIN
  
  IF OBJECT_ID ('LOG_otParGen' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_otParGen ON otParGen   /* File Nº: 1 */

  IF OBJECT_ID ('LOG_xgAfipComp' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_xgAfipComp ON xgAfipComp   /* File Nº: 2 */

  IF OBJECT_ID ('LOG_DataLog' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_DataLog ON DataLog   /* File Nº: 3 */

  IF OBJECT_ID ('LOG_vmAyuEco' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_vmAyuEco ON vmAyuEco   /* File Nº: 4 */

  IF OBJECT_ID ('LOG_icUniMov' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_icUniMov ON icUniMov   /* File Nº: 5 */

  IF OBJECT_ID ('LOG_icTipMov' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_icTipMov ON icTipMov   /* File Nº: 6 */

  IF OBJECT_ID ('LOG_icPlaMant' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_icPlaMant ON icPlaMant   /* File Nº: 7 */

  IF OBJECT_ID ('LOG_icMarcas' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_icMarcas ON icMarcas   /* File Nº: 8 */

  IF OBJECT_ID ('LOG_vcClieAdhe' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_vcClieAdhe ON vcClieAdhe   /* File Nº: 9 */

  IF OBJECT_ID ('LOG_vcCliHisEve' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_vcCliHisEve ON vcCliHisEve   /* File Nº: 10 */

  IF OBJECT_ID ('LOG_smInvSto' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_smInvSto ON smInvSto   /* File Nº: 11 */

  IF OBJECT_ID ('LOG_vcConVeT' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_vcConVeT ON vcConVeT   /* File Nº: 12 */

  IF OBJECT_ID ('LOG_vmSegPed' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_vmSegPed ON vmSegPed   /* File Nº: 13 */

  IF OBJECT_ID ('LOG_scArtDef' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_scArtDef ON scArtDef   /* File Nº: 14 */

  IF OBJECT_ID ('LOG_omIdMovF' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_omIdMovF ON omIdMovF   /* File Nº: 15 */

  IF OBJECT_ID ('LOG_vcDefCit' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_vcDefCit ON vcDefCit   /* File Nº: 16 */

  IF OBJECT_ID ('LOG_ccDefCit' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_ccDefCit ON ccDefCit   /* File Nº: 17 */

  IF OBJECT_ID ('LOG_vcConVeC' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_vcConVeC ON vcConVeC   /* File Nº: 18 */

  IF OBJECT_ID ('LOG_ccTReGCa' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_ccTReGCa ON ccTReGCa   /* File Nº: 19 */

  IF OBJECT_ID ('LOG_vcCConci' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_vcCConci ON vcCConci   /* File Nº: 20 */

  IF OBJECT_ID ('LOG_vcCliBen' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_vcCliBen ON vcCliBen   /* File Nº: 21 */

  IF OBJECT_ID ('LOG_omAsiCab' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_omAsiCab ON omAsiCab   /* File Nº: 22 */

  IF OBJECT_ID ('LOG_ocCotDet' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_ocCotDet ON ocCotDet   /* File Nº: 23 */

  IF OBJECT_ID ('LOG_ocIndDet' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_ocIndDet ON ocIndDet   /* File Nº: 24 */

  IF OBJECT_ID ('LOG_ccCConci' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_ccCConci ON ccCConci   /* File Nº: 25 */

  IF OBJECT_ID ('LOG_ocIndCab' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_ocIndCab ON ocIndCab   /* File Nº: 26 */

  IF OBJECT_ID ('LOG_ocPlaCCo' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_ocPlaCCo ON ocPlaCCo   /* File Nº: 27 */

  IF OBJECT_ID ('LOG_ocCotCab' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_ocCotCab ON ocCotCab   /* File Nº: 28 */

  IF OBJECT_ID ('LOG_omAsiDet' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_omAsiDet ON omAsiDet   /* File Nº: 29 */

  IF OBJECT_ID ('LOG_omAsiCci' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_omAsiCci ON omAsiCci   /* File Nº: 30 */

  IF OBJECT_ID ('LOG_fcCleChe' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_fcCleChe ON fcCleChe   /* File Nº: 31 */

  IF OBJECT_ID ('LOG_ocPlaCue' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_ocPlaCue ON ocPlaCue   /* File Nº: 32 */

  IF OBJECT_ID ('LOG_ccTReGes' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_ccTReGes ON ccTReGes   /* File Nº: 33 */

  IF OBJECT_ID ('LOG_ocCenCos' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_ocCenCos ON ocCenCos   /* File Nº: 34 */

  IF OBJECT_ID ('LOG_ccDestFa' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_ccDestFa ON ccDestFa   /* File Nº: 35 */

  IF OBJECT_ID ('LOG_omBanInt' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_omBanInt ON omBanInt   /* File Nº: 36 */

  IF OBJECT_ID ('LOG_cmComRGa' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_cmComRGa ON cmComRGa   /* File Nº: 37 */

  IF OBJECT_ID ('LOG_cmComVen' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_cmComVen ON cmComVen   /* File Nº: 38 */

  IF OBJECT_ID ('LOG_vcDefCom' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_vcDefCom ON vcDefCom   /* File Nº: 39 */

  IF OBJECT_ID ('LOG_ccSector' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_ccSector ON ccSector   /* File Nº: 40 */

  IF OBJECT_ID ('LOG_fmMovCaC' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_fmMovCaC ON fmMovCaC   /* File Nº: 41 */

  IF OBJECT_ID ('LOG_xmRegSus' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_xmRegSus ON xmRegSus   /* File Nº: 42 */

  IF OBJECT_ID ('LOG_cmEstPro' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_cmEstPro ON cmEstPro   /* File Nº: 43 */

  IF OBJECT_ID ('LOG_fcConChe' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_fcConChe ON fcConChe   /* File Nº: 44 */

  IF OBJECT_ID ('LOG_cmRefDeC' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_cmRefDeC ON cmRefDeC   /* File Nº: 45 */

  IF OBJECT_ID ('LOG_fcDefCom' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_fcDefCom ON fcDefCom   /* File Nº: 46 */

  IF OBJECT_ID ('LOG_fcTiMoBa' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_fcTiMoBa ON fcTiMoBa   /* File Nº: 47 */

  IF OBJECT_ID ('LOG_fcCueBan' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_fcCueBan ON fcCueBan   /* File Nº: 48 */

  IF OBJECT_ID ('LOG_vmConciD' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_vmConciD ON vmConciD   /* File Nº: 49 */

  IF OBJECT_ID ('LOG_fmExtBaD' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_fmExtBaD ON fmExtBaD   /* File Nº: 50 */

  IF OBJECT_ID ('LOG_fcBanBCR' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_fcBanBCR ON fcBanBCR   /* File Nº: 51 */

  IF OBJECT_ID ('LOG_smLotCom' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_smLotCom ON smLotCom   /* File Nº: 52 */

  IF OBJECT_ID ('LOG_fmMovCaD' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_fmMovCaD ON fmMovCaD   /* File Nº: 53 */

  IF OBJECT_ID ('LOG_kmVtaPreC' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_kmVtaPreC ON kmVtaPreC   /* File Nº: 54 */

  IF OBJECT_ID ('LOG_fmLiqOtC' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_fmLiqOtC ON fmLiqOtC   /* File Nº: 55 */

  IF OBJECT_ID ('LOG_fcEmpTar' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_fcEmpTar ON fcEmpTar   /* File Nº: 56 */

  IF OBJECT_ID ('LOG_fmPlaCaj' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_fmPlaCaj ON fmPlaCaj   /* File Nº: 57 */

  IF OBJECT_ID ('LOG_fmIdTiMo' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_fmIdTiMo ON fmIdTiMo   /* File Nº: 58 */

  IF OBJECT_ID ('LOG_fcDefTal' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_fcDefTal ON fcDefTal   /* File Nº: 59 */

  IF OBJECT_ID ('LOG_ccConCoD' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_ccConCoD ON ccConCoD   /* File Nº: 60 */

  IF OBJECT_ID ('LOG_fcEmplea' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_fcEmplea ON fcEmplea   /* File Nº: 61 */

  IF OBJECT_ID ('LOG_xcZonas' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_xcZonas ON xcZonas   /* File Nº: 62 */

  IF OBJECT_ID ('LOG_fmGenTxD' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_fmGenTxD ON fmGenTxD   /* File Nº: 63 */

  IF OBJECT_ID ('LOG_fmGenTxC' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_fmGenTxC ON fmGenTxC   /* File Nº: 64 */

  IF OBJECT_ID ('LOG_ccClaCom' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_ccClaCom ON ccClaCom   /* File Nº: 65 */

  IF OBJECT_ID ('LOG_fmLiqRta' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_fmLiqRta ON fmLiqRta   /* File Nº: 66 */

  IF OBJECT_ID ('LOG_fmCuoMuT' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_fmCuoMuT ON fmCuoMuT   /* File Nº: 67 */

  IF OBJECT_ID ('LOG_fcDefUsu' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_fcDefUsu ON fcDefUsu   /* File Nº: 68 */

  IF OBJECT_ID ('LOG_fmExtBaC' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_fmExtBaC ON fmExtBaC   /* File Nº: 69 */

  IF OBJECT_ID ('LOG_fmRefCoB' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_fmRefCoB ON fmRefCoB   /* File Nº: 70 */

  IF OBJECT_ID ('LOG_fmCuoLiq' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_fmCuoLiq ON fmCuoLiq   /* File Nº: 71 */

  IF OBJECT_ID ('LOG_fmMovChe' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_fmMovChe ON fmMovChe   /* File Nº: 72 */

  IF OBJECT_ID ('LOG_ccResCom' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_ccResCom ON ccResCom   /* File Nº: 73 */

  IF OBJECT_ID ('LOG_fmLiqTar' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_fmLiqTar ON fmLiqTar   /* File Nº: 74 */

  IF OBJECT_ID ('LOG_fmLiqFin' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_fmLiqFin ON fmLiqFin   /* File Nº: 75 */

  IF OBJECT_ID ('LOG_fmPreOtC' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_fmPreOtC ON fmPreOtC   /* File Nº: 76 */

  IF OBJECT_ID ('LOG_icCaHmKm' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_icCaHmKm ON icCaHmKm   /* File Nº: 77 */

  IF OBJECT_ID ('LOG_fmPlaSin' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_fmPlaSin ON fmPlaSin   /* File Nº: 78 */

  IF OBJECT_ID ('LOG_icTareas' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_icTareas ON icTareas   /* File Nº: 79 */

  IF OBJECT_ID ('LOG_vpPerVen' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_vpPerVen ON vpPerVen   /* File Nº: 80 */

  IF OBJECT_ID ('LOG_ccConCoC' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_ccConCoC ON ccConCoC   /* File Nº: 81 */

  IF OBJECT_ID ('LOG_fmLotCon' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_fmLotCon ON fmLotCon   /* File Nº: 82 */

  IF OBJECT_ID ('LOG_ccObsCal' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_ccObsCal ON ccObsCal   /* File Nº: 83 */

  IF OBJECT_ID ('LOG_fmPreTar' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_fmPreTar ON fmPreTar   /* File Nº: 84 */

  IF OBJECT_ID ('LOG_vmLotCpt' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_vmLotCpt ON vmLotCpt   /* File Nº: 85 */

  IF OBJECT_ID ('LOG_mmRegCrC' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_mmRegCrC ON mmRegCrC   /* File Nº: 86 */

  IF OBJECT_ID ('LOG_xgSitIva' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_xgSitIva ON xgSitIva   /* File Nº: 87 */

  IF OBJECT_ID ('LOG_mcReClCr' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_mcReClCr ON mcReClCr   /* File Nº: 88 */

  IF OBJECT_ID ('LOG_mcEmpFin' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_mcEmpFin ON mcEmpFin   /* File Nº: 89 */

  IF OBJECT_ID ('LOG_xgProvin' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_xgProvin ON xgProvin   /* File Nº: 90 */

  IF OBJECT_ID ('LOG_xcPaises' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_xcPaises ON xcPaises   /* File Nº: 91 */

  IF OBJECT_ID ('LOG_ocCarTra' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_ocCarTra ON ocCarTra   /* File Nº: 92 */

  IF OBJECT_ID ('LOG_kmVtaPreD' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_kmVtaPreD ON kmVtaPreD   /* File Nº: 93 */

  IF OBJECT_ID ('LOG_mcOpCuCa' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_mcOpCuCa ON mcOpCuCa   /* File Nº: 94 */

  IF OBJECT_ID ('LOG_mmTarPos' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_mmTarPos ON mmTarPos   /* File Nº: 95 */

  IF OBJECT_ID ('LOG_mcOpCuDe' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_mcOpCuDe ON mcOpCuDe   /* File Nº: 96 */

  IF OBJECT_ID ('LOG_fpParInf' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_fpParInf ON fpParInf   /* File Nº: 97 */

  IF OBJECT_ID ('LOG_mmResCab' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_mmResCab ON mmResCab   /* File Nº: 98 */

  IF OBJECT_ID ('LOG_omAsiGCa' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_omAsiGCa ON omAsiGCa   /* File Nº: 99 */

  IF OBJECT_ID ('LOG_omAsiGCc' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_omAsiGCc ON omAsiGCc   /* File Nº: 100 */

  IF OBJECT_ID ('LOG_vcActivi' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_vcActivi ON vcActivi   /* File Nº: 101 */

  IF OBJECT_ID ('LOG_omAsiGDe' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_omAsiGDe ON omAsiGDe   /* File Nº: 102 */

  IF OBJECT_ID ('LOG_vcSucurs' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_vcSucurs ON vcSucurs   /* File Nº: 103 */

  IF OBJECT_ID ('LOG_ocCanCos' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_ocCanCos ON ocCanCos   /* File Nº: 104 */

  IF OBJECT_ID ('LOG_scCenSto' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_scCenSto ON scCenSto   /* File Nº: 105 */

  IF OBJECT_ID ('LOG_omSumBal' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_omSumBal ON omSumBal   /* File Nº: 106 */

  IF OBJECT_ID ('LOG_vcTraFle' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_vcTraFle ON vcTraFle   /* File Nº: 107 */

  IF OBJECT_ID ('LOG_scArtDcS' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_scArtDcS ON scArtDcS   /* File Nº: 108 */

  IF OBJECT_ID ('LOG_scRubros' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_scRubros ON scRubros   /* File Nº: 109 */

  IF OBJECT_ID ('LOG_ocPreAsC' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_ocPreAsC ON ocPreAsC   /* File Nº: 110 */

  IF OBJECT_ID ('LOG_ocPreAsD' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_ocPreAsD ON ocPreAsD   /* File Nº: 111 */

  IF OBJECT_ID ('LOG_vcPunVen' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_vcPunVen ON vcPunVen   /* File Nº: 112 */

  IF OBJECT_ID ('LOG_opPerCon' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_opPerCon ON opPerCon   /* File Nº: 113 */

  IF OBJECT_ID ('LOG_omRegTra' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_omRegTra ON omRegTra   /* File Nº: 114 */

  IF OBJECT_ID ('LOG_vcCliDom' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_vcCliDom ON vcCliDom   /* File Nº: 115 */

  IF OBJECT_ID ('LOG_omIdGene' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_omIdGene ON omIdGene   /* File Nº: 116 */

  IF OBJECT_ID ('LOG_xgTarPro' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_xgTarPro ON xgTarPro   /* File Nº: 117 */

  IF OBJECT_ID ('LOG_omAcuPer' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_omAcuPer ON omAcuPer   /* File Nº: 118 */

  IF OBJECT_ID ('LOG_vcClient' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_vcClient ON vcClient   /* File Nº: 119 */

  IF OBJECT_ID ('LOG_omAsiCaR' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_omAsiCaR ON omAsiCaR   /* File Nº: 120 */

  IF OBJECT_ID ('LOG_omAsiRes' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_omAsiRes ON omAsiRes   /* File Nº: 121 */

  IF OBJECT_ID ('LOG_ocTipCue' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_ocTipCue ON ocTipCue   /* File Nº: 122 */

  IF OBJECT_ID ('LOG_omAsiDeR' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_omAsiDeR ON omAsiDeR   /* File Nº: 123 */

  IF OBJECT_ID ('LOG_fcLocBan' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_fcLocBan ON fcLocBan   /* File Nº: 124 */

  IF OBJECT_ID ('LOG_omCtrlPAc' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_omCtrlPAc ON omCtrlPAc   /* File Nº: 125 */

  IF OBJECT_ID ('LOG_mcMutual' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_mcMutual ON mcMutual   /* File Nº: 126 */

  IF OBJECT_ID ('LOG_omCtrlCab' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_omCtrlCab ON omCtrlCab   /* File Nº: 127 */

  IF OBJECT_ID ('LOG_vcVended' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_vcVended ON vcVended   /* File Nº: 128 */

  IF OBJECT_ID ('LOG_scDefTal' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_scDefTal ON scDefTal   /* File Nº: 129 */

  IF OBJECT_ID ('LOG_omEsConC' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_omEsConC ON omEsConC   /* File Nº: 130 */

  IF OBJECT_ID ('LOG_omCtrlPer' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_omCtrlPer ON omCtrlPer   /* File Nº: 131 */

  IF OBJECT_ID ('LOG_xcPictures' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_xcPictures ON xcPictures   /* File Nº: 132 */

  IF OBJECT_ID ('LOG_omEsConD' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_omEsConD ON omEsConD   /* File Nº: 133 */

  IF OBJECT_ID ('LOG_omEsConR' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_omEsConR ON omEsConR   /* File Nº: 134 */

  IF OBJECT_ID ('LOG_omPeFCab' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_omPeFCab ON omPeFCab   /* File Nº: 135 */

  IF OBJECT_ID ('LOG_omIdHisD' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_omIdHisD ON omIdHisD   /* File Nº: 136 */

  IF OBJECT_ID ('LOG_omPeFDet' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_omPeFDet ON omPeFDet   /* File Nº: 137 */

  IF OBJECT_ID ('LOG_omCtrlRes' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_omCtrlRes ON omCtrlRes   /* File Nº: 138 */

  IF OBJECT_ID ('LOG_omIdComp' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_omIdComp ON omIdComp   /* File Nº: 139 */

  IF OBJECT_ID ('LOG_omIdHisC' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_omIdHisC ON omIdHisC   /* File Nº: 140 */

  IF OBJECT_ID ('LOG_scDefCom' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_scDefCom ON scDefCom   /* File Nº: 141 */

  IF OBJECT_ID ('LOG_omCtrlDet' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_omCtrlDet ON omCtrlDet   /* File Nº: 142 */

  IF OBJECT_ID ('LOG_pcArmIns' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_pcArmIns ON pcArmIns   /* File Nº: 143 */

  IF OBJECT_ID ('LOG_pmOtELab' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_pmOtELab ON pmOtELab   /* File Nº: 144 */

  IF OBJECT_ID ('LOG_fmMovCci' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_fmMovCci ON fmMovCci   /* File Nº: 145 */

  IF OBJECT_ID ('LOG_pcArmFEs' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_pcArmFEs ON pcArmFEs   /* File Nº: 146 */

  IF OBJECT_ID ('LOG_pcTecMpC' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_pcTecMpC ON pcTecMpC   /* File Nº: 147 */

  IF OBJECT_ID ('LOG_vcActDGI' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_vcActDGI ON vcActDGI   /* File Nº: 148 */

  IF OBJECT_ID ('LOG_vcAdmSto' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_vcAdmSto ON vcAdmSto   /* File Nº: 149 */

  IF OBJECT_ID ('LOG_vcTraImp' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_vcTraImp ON vcTraImp   /* File Nº: 150 */

  IF OBJECT_ID ('LOG_pcArmFor' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_pcArmFor ON pcArmFor   /* File Nº: 151 */

  IF OBJECT_ID ('LOG_fpPreLiq' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_fpPreLiq ON fpPreLiq   /* File Nº: 152 */

  IF OBJECT_ID ('LOG_pmParTar' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_pmParTar ON pmParTar   /* File Nº: 153 */

  IF OBJECT_ID ('LOG_scArtPoo' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_scArtPoo ON scArtPoo   /* File Nº: 154 */

  IF OBJECT_ID ('LOG_pcTecMpO' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_pcTecMpO ON pcTecMpO   /* File Nº: 155 */

  IF OBJECT_ID ('LOG_pcTecMpE' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_pcTecMpE ON pcTecMpE   /* File Nº: 156 */

  IF OBJECT_ID ('LOG_vcCliCre' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_vcCliCre ON vcCliCre   /* File Nº: 157 */

  IF OBJECT_ID ('LOG_scColor' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_scColor ON scColor   /* File Nº: 158 */

  IF OBJECT_ID ('LOG_pcProcFa' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_pcProcFa ON pcProcFa   /* File Nº: 159 */

  IF OBJECT_ID ('LOG_pmPlaEnv' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_pmPlaEnv ON pmPlaEnv   /* File Nº: 160 */

  IF OBJECT_ID ('LOG_ptParPro' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_ptParPro ON ptParPro   /* File Nº: 161 */

  IF OBJECT_ID ('LOG_rtLugarCarga' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_rtLugarCarga ON rtLugarCarga   /* File Nº: 162 */

  IF OBJECT_ID ('LOG_rtDestComer' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_rtDestComer ON rtDestComer   /* File Nº: 163 */

  IF OBJECT_ID ('LOG_scEnvases' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_scEnvases ON scEnvases   /* File Nº: 164 */

  IF OBJECT_ID ('LOG_scAdmSto' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_scAdmSto ON scAdmSto   /* File Nº: 165 */

  IF OBJECT_ID ('LOG_rtCanalComer' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_rtCanalComer ON rtCanalComer   /* File Nº: 166 */

  IF OBJECT_ID ('LOG_vcDefAsC' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_vcDefAsC ON vcDefAsC   /* File Nº: 167 */

  IF OBJECT_ID ('LOG_rtLugarDesca' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_rtLugarDesca ON rtLugarDesca   /* File Nº: 168 */

  IF OBJECT_ID ('LOG_scDefPun' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_scDefPun ON scDefPun   /* File Nº: 169 */

  IF OBJECT_ID ('LOG_vcDefPun' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_vcDefPun ON vcDefPun   /* File Nº: 170 */

  IF OBJECT_ID ('LOG_smComMov' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_smComMov ON smComMov   /* File Nº: 171 */

  IF OBJECT_ID ('LOG_scDefAsi' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_scDefAsi ON scDefAsi   /* File Nº: 172 */

  IF OBJECT_ID ('LOG_vmComCab' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_vmComCab ON vmComCab   /* File Nº: 173 */

  IF OBJECT_ID ('LOG_vmComArt' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_vmComArt ON vmComArt   /* File Nº: 174 */

  IF OBJECT_ID ('LOG_rmLiquidacion' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_rmLiquidacion ON rmLiquidacion   /* File Nº: 175 */

  IF OBJECT_ID ('LOG_scSubRub' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_scSubRub ON scSubRub   /* File Nº: 176 */

  IF OBJECT_ID ('LOG_rmPrecTeleFax' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_rmPrecTeleFax ON rmPrecTeleFax   /* File Nº: 177 */

  IF OBJECT_ID ('LOG_rmPrecProm' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_rmPrecProm ON rmPrecProm   /* File Nº: 178 */

  IF OBJECT_ID ('LOG_vtParGen' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_vtParGen ON vtParGen   /* File Nº: 179 */

  IF OBJECT_ID ('LOG_vcCliGru' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_vcCliGru ON vcCliGru   /* File Nº: 180 */

  IF OBJECT_ID ('LOG_vcLisPDe' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_vcLisPDe ON vcLisPDe   /* File Nº: 181 */

  IF OBJECT_ID ('LOG_vcConFac' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_vcConFac ON vcConFac   /* File Nº: 182 */

  IF OBJECT_ID ('LOG_vcCliLug' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_vcCliLug ON vcCliLug   /* File Nº: 183 */

  IF OBJECT_ID ('LOG_vcLisPCa' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_vcLisPCa ON vcLisPCa   /* File Nº: 184 */

  IF OBJECT_ID ('LOG_vcDefTal' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_vcDefTal ON vcDefTal   /* File Nº: 185 */

  IF OBJECT_ID ('LOG_scArticu' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_scArticu ON scArticu   /* File Nº: 186 */

  IF OBJECT_ID ('LOG_smComCab' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_smComCab ON smComCab   /* File Nº: 187 */

  IF OBJECT_ID ('LOG_rtPreDes' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_rtPreDes ON rtPreDes   /* File Nº: 188 */

  IF OBJECT_ID ('LOG_rtCosFleZon' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_rtCosFleZon ON rtCosFleZon   /* File Nº: 189 */

  IF OBJECT_ID ('LOG_xgLocali' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_xgLocali ON xgLocali   /* File Nº: 190 */

  IF OBJECT_ID ('LOG_vcDefUsu' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_vcDefUsu ON vcDefUsu   /* File Nº: 191 */

  IF OBJECT_ID ('LOG_vmLotVen' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_vmLotVen ON vmLotVen   /* File Nº: 192 */

  IF OBJECT_ID ('LOG_rtExistencias' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_rtExistencias ON rtExistencias   /* File Nº: 193 */

  IF OBJECT_ID ('LOG_rtRubClie' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_rtRubClie ON rtRubClie   /* File Nº: 194 */

  IF OBJECT_ID ('LOG_fcDefAsC' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_fcDefAsC ON fcDefAsC   /* File Nº: 195 */

  IF OBJECT_ID ('LOG_scArtCurD' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_scArtCurD ON scArtCurD   /* File Nº: 196 */

  IF OBJECT_ID ('LOG_fcModAsC' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_fcModAsC ON fcModAsC   /* File Nº: 197 */

  IF OBJECT_ID ('LOG_scArtCurC' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_scArtCurC ON scArtCurC   /* File Nº: 198 */

  IF OBJECT_ID ('LOG_scArtTLe' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_scArtTLe ON scArtTLe   /* File Nº: 199 */

  IF OBJECT_ID ('LOG_scTempor' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_scTempor ON scTempor   /* File Nº: 200 */

  IF OBJECT_ID ('LOG_vcModAsC' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_vcModAsC ON vcModAsC   /* File Nº: 201 */

  IF OBJECT_ID ('LOG_fcModAsD' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_fcModAsD ON fcModAsD   /* File Nº: 202 */

  IF OBJECT_ID ('LOG_scCenEnt' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_scCenEnt ON scCenEnt   /* File Nº: 203 */

  IF OBJECT_ID ('LOG_fcCueCaj' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_fcCueCaj ON fcCueCaj   /* File Nº: 204 */

  IF OBJECT_ID ('LOG_scArtTipo' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_scArtTipo ON scArtTipo   /* File Nº: 205 */

  IF OBJECT_ID ('LOG_scArtSus' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_scArtSus ON scArtSus   /* File Nº: 206 */

  IF OBJECT_ID ('LOG_ccProCre' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_ccProCre ON ccProCre   /* File Nº: 207 */

  IF OBJECT_ID ('LOG_vcProCli' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_vcProCli ON vcProCli   /* File Nº: 208 */

  IF OBJECT_ID ('LOG_ccProDom' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_ccProDom ON ccProDom   /* File Nº: 209 */

  IF OBJECT_ID ('LOG_vcLisOCa' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_vcLisOCa ON vcLisOCa   /* File Nº: 210 */

  IF OBJECT_ID ('LOG_scDefUsu' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_scDefUsu ON scDefUsu   /* File Nº: 211 */

  IF OBJECT_ID ('LOG_ccProvee' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_ccProvee ON ccProvee   /* File Nº: 212 */

  IF OBJECT_ID ('LOG_scSeccio' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_scSeccio ON scSeccio   /* File Nº: 213 */

  IF OBJECT_ID ('LOG_vcLisODe' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_vcLisODe ON vcLisODe   /* File Nº: 214 */

  IF OBJECT_ID ('LOG_smComInv' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_smComInv ON smComInv   /* File Nº: 215 */

  IF OBJECT_ID ('LOG_ccProGru' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_ccProGru ON ccProGru   /* File Nº: 216 */

  IF OBJECT_ID ('LOG_scRubGru' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_scRubGru ON scRubGru   /* File Nº: 217 */

  IF OBJECT_ID ('LOG_xgSitInB' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_xgSitInB ON xgSitInB   /* File Nº: 218 */

  IF OBJECT_ID ('LOG_smSimAct' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_smSimAct ON smSimAct   /* File Nº: 219 */

  IF OBJECT_ID ('LOG_ccConFac' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_ccConFac ON ccConFac   /* File Nº: 220 */

  IF OBJECT_ID ('LOG_vcModAsD' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_vcModAsD ON vcModAsD   /* File Nº: 221 */

  IF OBJECT_ID ('LOG_ccDefAsC' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_ccDefAsC ON ccDefAsC   /* File Nº: 222 */

  IF OBJECT_ID ('LOG_xgDocDGI' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_xgDocDGI ON xgDocDGI   /* File Nº: 223 */

  IF OBJECT_ID ('LOG_smSimMov' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_smSimMov ON smSimMov   /* File Nº: 224 */

  IF OBJECT_ID ('LOG_tcAlumCarreas' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_tcAlumCarreas ON tcAlumCarreas   /* File Nº: 225 */

  IF OBJECT_ID ('LOG_tmLibMatDet' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_tmLibMatDet ON tmLibMatDet   /* File Nº: 226 */

  IF OBJECT_ID ('LOG_tmLibMatCab' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_tmLibMatCab ON tmLibMatCab   /* File Nº: 227 */

  IF OBJECT_ID ('LOG_tcYearCursado' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_tcYearCursado ON tcYearCursado   /* File Nº: 228 */

  IF OBJECT_ID ('LOG_tcSitCursado' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_tcSitCursado ON tcSitCursado   /* File Nº: 229 */

  IF OBJECT_ID ('LOG_tcSedes' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_tcSedes ON tcSedes   /* File Nº: 230 */

  IF OBJECT_ID ('LOG_tcReferentes' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_tcReferentes ON tcReferentes   /* File Nº: 231 */

  IF OBJECT_ID ('LOG_tcMateXCarreras' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_tcMateXCarreras ON tcMateXCarreras   /* File Nº: 232 */

  IF OBJECT_ID ('LOG_tcMaterias' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_tcMaterias ON tcMaterias   /* File Nº: 233 */

  IF OBJECT_ID ('LOG_tcLibrosMatrices' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_tcLibrosMatrices ON tcLibrosMatrices   /* File Nº: 234 */

  IF OBJECT_ID ('LOG_tcLibrosActas' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_tcLibrosActas ON tcLibrosActas   /* File Nº: 235 */

  IF OBJECT_ID ('LOG_tcDocumentacion' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_tcDocumentacion ON tcDocumentacion   /* File Nº: 236 */

  IF OBJECT_ID ('LOG_tcCursos' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_tcCursos ON tcCursos   /* File Nº: 237 */

  IF OBJECT_ID ('LOG_tcCursados' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_tcCursados ON tcCursados   /* File Nº: 238 */

  IF OBJECT_ID ('LOG_tcCondCursado' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_tcCondCursado ON tcCondCursado   /* File Nº: 239 */

  IF OBJECT_ID ('LOG_tcCarrera' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_tcCarrera ON tcCarrera   /* File Nº: 240 */

  IF OBJECT_ID ('LOG_tcAranceles' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_tcAranceles ON tcAranceles   /* File Nº: 241 */

  IF OBJECT_ID ('LOG_tcAlumnos' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_tcAlumnos ON tcAlumnos   /* File Nº: 242 */

  IF OBJECT_ID ('LOG_tcAlumDocu' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_tcAlumDocu ON tcAlumDocu   /* File Nº: 243 */

  IF OBJECT_ID ('LOG_ccDefCom' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_ccDefCom ON ccDefCom   /* File Nº: 244 */

  IF OBJECT_ID ('LOG_xgTipImp' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_xgTipImp ON xgTipImp   /* File Nº: 245 */

  IF OBJECT_ID ('LOG_ccDefPun' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_ccDefPun ON ccDefPun   /* File Nº: 246 */

  IF OBJECT_ID ('LOG_vmComCon' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_vmComCon ON vmComCon   /* File Nº: 247 */

  IF OBJECT_ID ('LOG_ccDefTal' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_ccDefTal ON ccDefTal   /* File Nº: 248 */

  IF OBJECT_ID ('LOG_vmMoClEv' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_vmMoClEv ON vmMoClEv   /* File Nº: 249 */

  IF OBJECT_ID ('LOG_UserWeb' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_UserWeb ON UserWeb   /* File Nº: 250 */

  IF OBJECT_ID ('LOG_vmRefCom' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_vmRefCom ON vmRefCom   /* File Nº: 251 */

  IF OBJECT_ID ('LOG_ccDefUsu' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_ccDefUsu ON ccDefUsu   /* File Nº: 252 */

  IF OBJECT_ID ('LOG_vcCliAre' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_vcCliAre ON vcCliAre   /* File Nº: 253 */

  IF OBJECT_ID ('LOG_vcCliCat' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_vcCliCat ON vcCliCat   /* File Nº: 254 */

  IF OBJECT_ID ('LOG_vmComImp' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_vmComImp ON vmComImp   /* File Nº: 255 */

  IF OBJECT_ID ('LOG_vmComMem' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_vmComMem ON vmComMem   /* File Nº: 256 */

  IF OBJECT_ID ('LOG_vcCliCan' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_vcCliCan ON vcCliCan   /* File Nº: 257 */

  IF OBJECT_ID ('LOG_ftParGen' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_ftParGen ON ftParGen   /* File Nº: 258 */

  IF OBJECT_ID ('LOG_vcCliCRM' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_vcCliCRM ON vcCliCRM   /* File Nº: 259 */

  IF OBJECT_ID ('LOG_pmOtCom' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_pmOtCom ON pmOtCom   /* File Nº: 260 */

  IF OBJECT_ID ('LOG_ccModAsC' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_ccModAsC ON ccModAsC   /* File Nº: 261 */

  IF OBJECT_ID ('LOG_vcConVeD' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_vcConVeD ON vcConVeD   /* File Nº: 262 */

  IF OBJECT_ID ('LOG_ucMotSan' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_ucMotSan ON ucMotSan   /* File Nº: 263 */

  IF OBJECT_ID ('LOG_vcJurEnt' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_vcJurEnt ON vcJurEnt   /* File Nº: 264 */

  IF OBJECT_ID ('LOG_ccModAsD' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_ccModAsD ON ccModAsD   /* File Nº: 265 */

  IF OBJECT_ID ('LOG_pcEstPro' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_pcEstPro ON pcEstPro   /* File Nº: 266 */

  IF OBJECT_ID ('LOG_pcCenTra' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_pcCenTra ON pcCenTra   /* File Nº: 267 */

  IF OBJECT_ID ('LOG_vcCliRes' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_vcCliRes ON vcCliRes   /* File Nº: 268 */

  IF OBJECT_ID ('LOG_pcTareas' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_pcTareas ON pcTareas   /* File Nº: 269 */

  IF OBJECT_ID ('LOG_pmOtCab' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_pmOtCab ON pmOtCab   /* File Nº: 270 */

  IF OBJECT_ID ('LOG_vcDefMtp' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_vcDefMtp ON vcDefMtp   /* File Nº: 271 */

  IF OBJECT_ID ('LOG_pmOtMov' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_pmOtMov ON pmOtMov   /* File Nº: 272 */

  IF OBJECT_ID ('LOG_pcCenImp' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_pcCenImp ON pcCenImp   /* File Nº: 273 */

  IF OBJECT_ID ('LOG_vcCliGar' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_vcCliGar ON vcCliGar   /* File Nº: 274 */

  IF OBJECT_ID ('LOG_vcProArt' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_vcProArt ON vcProArt   /* File Nº: 275 */

  IF OBJECT_ID ('LOG_vcCliPla' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_vcCliPla ON vcCliPla   /* File Nº: 276 */

  IF OBJECT_ID ('LOG_ccTraImp' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_ccTraImp ON ccTraImp   /* File Nº: 277 */

  IF OBJECT_ID ('LOG_pcImprod' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_pcImprod ON pcImprod   /* File Nº: 278 */

  IF OBJECT_ID ('LOG_vcCliDebAuto' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_vcCliDebAuto ON vcCliDebAuto   /* File Nº: 279 */

  IF OBJECT_ID ('LOG_vcTipEve' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_vcTipEve ON vcTipEve   /* File Nº: 280 */

  IF OBJECT_ID ('LOG_pcRutFab' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_pcRutFab ON pcRutFab   /* File Nº: 281 */

  IF OBJECT_ID ('LOG_vcLisPdc' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_vcLisPdc ON vcLisPdc   /* File Nº: 282 */

  IF OBJECT_ID ('LOG_umRetGan' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_umRetGan ON umRetGan   /* File Nº: 283 */

  IF OBJECT_ID ('LOG_cmComArt' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_cmComArt ON cmComArt   /* File Nº: 284 */

  IF OBJECT_ID ('LOG_ucDiagno' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_ucDiagno ON ucDiagno   /* File Nº: 285 */

  IF OBJECT_ID ('LOG_vcDefMAs' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_vcDefMAs ON vcDefMAs   /* File Nº: 286 */

  IF OBJECT_ID ('LOG_ccDefMAs' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_ccDefMAs ON ccDefMAs   /* File Nº: 287 */

  IF OBJECT_ID ('LOG_rgEmpresa' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_rgEmpresa ON rgEmpresa   /* File Nº: 288 */

  IF OBJECT_ID ('LOG_umLegRet' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_umLegRet ON umLegRet   /* File Nº: 289 */

  IF OBJECT_ID ('LOG_cmComCab' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_cmComCab ON cmComCab   /* File Nº: 290 */

  IF OBJECT_ID ('LOG_rpConsStock' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_rpConsStock ON rpConsStock   /* File Nº: 291 */

  IF OBJECT_ID ('LOG_cmComCon' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_cmComCon ON cmComCon   /* File Nº: 292 */

  IF OBJECT_ID ('LOG_rtRubros' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_rtRubros ON rtRubros   /* File Nº: 293 */

  IF OBJECT_ID ('LOG_cmComImp' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_cmComImp ON cmComImp   /* File Nº: 294 */

  IF OBJECT_ID ('LOG_vcLiComi' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_vcLiComi ON vcLiComi   /* File Nº: 295 */

  IF OBJECT_ID ('LOG_rgParametros' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_rgParametros ON rgParametros   /* File Nº: 296 */

  IF OBJECT_ID ('LOG_rmDetaStock' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_rmDetaStock ON rmDetaStock   /* File Nº: 297 */

  IF OBJECT_ID ('LOG_cmLotCom' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_cmLotCom ON cmLotCom   /* File Nº: 298 */

  IF OBJECT_ID ('LOG_vcLisDto' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_vcLisDto ON vcLisDto   /* File Nº: 299 */

  IF OBJECT_ID ('LOG_rtChoferes' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_rtChoferes ON rtChoferes   /* File Nº: 300 */

  IF OBJECT_ID ('LOG_cmRefCom' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_cmRefCom ON cmRefCom   /* File Nº: 301 */

  IF OBJECT_ID ('LOG_rmDetDetStock' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_rmDetDetStock ON rmDetDetStock   /* File Nº: 302 */

  IF OBJECT_ID ('LOG_cmConciD' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_cmConciD ON cmConciD   /* File Nº: 303 */

  IF OBJECT_ID ('LOG_vmCarJDe' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_vmCarJDe ON vmCarJDe   /* File Nº: 304 */

  IF OBJECT_ID ('LOG_vmCarJLo' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_vmCarJLo ON vmCarJLo   /* File Nº: 305 */

  IF OBJECT_ID ('LOG_vmVendLV' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_vmVendLV ON vmVendLV   /* File Nº: 306 */

  IF OBJECT_ID ('LOG_omPeFImg' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_omPeFImg ON omPeFImg   /* File Nº: 307 */

  IF OBJECT_ID ('LOG_rtTamanos' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_rtTamanos ON rtTamanos   /* File Nº: 308 */

  IF OBJECT_ID ('LOG_cpPerCom' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_cpPerCom ON cpPerCom   /* File Nº: 309 */

  IF OBJECT_ID ('LOG_rtVariedades' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_rtVariedades ON rtVariedades   /* File Nº: 310 */

  IF OBJECT_ID ('LOG_vmLiCDet' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_vmLiCDet ON vmLiCDet   /* File Nº: 311 */

  IF OBJECT_ID ('LOG_vmDepPla' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_vmDepPla ON vmDepPla   /* File Nº: 312 */

  IF OBJECT_ID ('LOG_vmComOrd' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_vmComOrd ON vmComOrd   /* File Nº: 313 */

  IF OBJECT_ID ('LOG_spPerSto' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_spPerSto ON spPerSto   /* File Nº: 314 */

  IF OBJECT_ID ('LOG_ctParGen' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_ctParGen ON ctParGen   /* File Nº: 315 */

  IF OBJECT_ID ('LOG_vmPedWeb' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_vmPedWeb ON vmPedWeb   /* File Nº: 316 */

  IF OBJECT_ID ('LOG_xLogCom' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_xLogCom ON xLogCom   /* File Nº: 317 */

  IF OBJECT_ID ('LOG_vcCliInfBan' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_vcCliInfBan ON vcCliInfBan   /* File Nº: 318 */

  IF OBJECT_ID ('LOG_mmResDet' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_mmResDet ON mmResDet   /* File Nº: 319 */

  IF OBJECT_ID ('LOG_vcCliXGar' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_vcCliXGar ON vcCliXGar   /* File Nº: 320 */

  IF OBJECT_ID ('LOG_rtMarcas' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_rtMarcas ON rtMarcas   /* File Nº: 321 */

  IF OBJECT_ID ('LOG_vmLiCCab' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_vmLiCCab ON vmLiCCab   /* File Nº: 322 */

  IF OBJECT_ID ('LOG_mmResCie' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_mmResCie ON mmResCie   /* File Nº: 323 */

  IF OBJECT_ID ('LOG_vmLicDeD' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_vmLicDeD ON vmLicDeD   /* File Nº: 324 */

  IF OBJECT_ID ('LOG_vcCliSep' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_vcCliSep ON vcCliSep   /* File Nº: 325 */

  IF OBJECT_ID ('LOG_vcCliMBa' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_vcCliMBa ON vcCliMBa   /* File Nº: 326 */

  IF OBJECT_ID ('LOG_vmDepPVD' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_vmDepPVD ON vmDepPVD   /* File Nº: 327 */

  IF OBJECT_ID ('LOG_vmLiCDeF' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_vmLiCDeF ON vmLiCDeF   /* File Nº: 328 */

  IF OBJECT_ID ('LOG_vmLiCRcD' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_vmLiCRcD ON vmLiCRcD   /* File Nº: 329 */

  IF OBJECT_ID ('LOG_vcCliZon' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_vcCliZon ON vcCliZon   /* File Nº: 330 */

  IF OBJECT_ID ('LOG_rtProductos' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_rtProductos ON rtProductos   /* File Nº: 331 */

  IF OBJECT_ID ('LOG_rtCompDeStock' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_rtCompDeStock ON rtCompDeStock   /* File Nº: 332 */

  IF OBJECT_ID ('LOG_vcForPag' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_vcForPag ON vcForPag   /* File Nº: 333 */

  IF OBJECT_ID ('LOG_vmHomReg' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_vmHomReg ON vmHomReg   /* File Nº: 334 */

  IF OBJECT_ID ('LOG_vmRefDeC' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_vmRefDeC ON vmRefDeC   /* File Nº: 335 */

  IF OBJECT_ID ('LOG_rmCabeStock' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_rmCabeStock ON rmCabeStock   /* File Nº: 336 */

  IF OBJECT_ID ('LOG_xgPueTra' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_xgPueTra ON xgPueTra   /* File Nº: 337 */

  IF OBJECT_ID ('LOG_rtLineaProducion' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_rtLineaProducion ON rtLineaProducion   /* File Nº: 338 */

  IF OBJECT_ID ('LOG_rtEnvases' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_rtEnvases ON rtEnvases   /* File Nº: 339 */

  IF OBJECT_ID ('LOG_rtCamaras' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_rtCamaras ON rtCamaras   /* File Nº: 340 */

  IF OBJECT_ID ('LOG_vcDefTMa' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_vcDefTMa ON vcDefTMa   /* File Nº: 341 */

  IF OBJECT_ID ('LOG_wcCamiones' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_wcCamiones ON wcCamiones   /* File Nº: 342 */

  IF OBJECT_ID ('LOG_xmSqlUsu' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_xmSqlUsu ON xmSqlUsu   /* File Nº: 343 */

  IF OBJECT_ID ('LOG_fmRegID_' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_fmRegID_ ON fmRegID_   /* File Nº: 344 */

  IF OBJECT_ID ('LOG_zcTipCua' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_zcTipCua ON zcTipCua   /* File Nº: 345 */

  IF OBJECT_ID ('LOG_zmCoTrDC' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_zmCoTrDC ON zmCoTrDC   /* File Nº: 346 */

  IF OBJECT_ID ('LOG_zcClaHac' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_zcClaHac ON zcClaHac   /* File Nº: 347 */

  IF OBJECT_ID ('LOG_wcFincas' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_wcFincas ON wcFincas   /* File Nº: 348 */

  IF OBJECT_ID ('LOG_vcFleTar' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_vcFleTar ON vcFleTar   /* File Nº: 349 */

  IF OBJECT_ID ('LOG_wcOrigDest' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_wcOrigDest ON wcOrigDest   /* File Nº: 350 */

  IF OBJECT_ID ('LOG_imComTar' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_imComTar ON imComTar   /* File Nº: 351 */

  IF OBJECT_ID ('LOG_wmPesadas' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_wmPesadas ON wmPesadas   /* File Nº: 352 */

  IF OBJECT_ID ('LOG_vmCarJCa' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_vmCarJCa ON vmCarJCa   /* File Nº: 353 */

  IF OBJECT_ID ('LOG_mmCoefCr' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_mmCoefCr ON mmCoefCr   /* File Nº: 354 */

  IF OBJECT_ID ('LOG_xgRegTer' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_xgRegTer ON xgRegTer   /* File Nº: 355 */

  IF OBJECT_ID ('LOG_vmHomEqu' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_vmHomEqu ON vmHomEqu   /* File Nº: 356 */

  IF OBJECT_ID ('LOG_cmLotAut' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_cmLotAut ON cmLotAut   /* File Nº: 357 */

  IF OBJECT_ID ('LOG_vmImpFisD' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_vmImpFisD ON vmImpFisD   /* File Nº: 358 */

  IF OBJECT_ID ('LOG_vmImpFisC' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_vmImpFisC ON vmImpFisC   /* File Nº: 359 */

  IF OBJECT_ID ('LOG_xmProEst' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_xmProEst ON xmProEst   /* File Nº: 360 */

  IF OBJECT_ID ('LOG_xcCodRee' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_xcCodRee ON xcCodRee   /* File Nº: 361 */

  IF OBJECT_ID ('LOG_xxSqlRes' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_xxSqlRes ON xxSqlRes   /* File Nº: 362 */

  IF OBJECT_ID ('LOG_zcProHac' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_zcProHac ON zcProHac   /* File Nº: 363 */

  IF OBJECT_ID ('LOG_vmSegMFd' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_vmSegMFd ON vmSegMFd   /* File Nº: 364 */

  IF OBJECT_ID ('LOG_vmHomLot' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_vmHomLot ON vmHomLot   /* File Nº: 365 */

  IF OBJECT_ID ('LOG_vmSegMFc' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_vmSegMFc ON vmSegMFc   /* File Nº: 366 */

  IF OBJECT_ID ('LOG_vcMotPen' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_vcMotPen ON vcMotPen   /* File Nº: 367 */

  IF OBJECT_ID ('LOG_wcEnvases' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_wcEnvases ON wcEnvases   /* File Nº: 368 */

  IF OBJECT_ID ('LOG_zcMatade' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_zcMatade ON zcMatade   /* File Nº: 369 */

  IF OBJECT_ID ('LOG_wgParametros' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_wgParametros ON wgParametros   /* File Nº: 370 */

  IF OBJECT_ID ('LOG_wpConsul' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_wpConsul ON wpConsul   /* File Nº: 371 */

  IF OBJECT_ID ('LOG_xgPueTEx' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_xgPueTEx ON xgPueTEx   /* File Nº: 372 */

  IF OBJECT_ID ('LOG_xgPueUsu' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_xgPueUsu ON xgPueUsu   /* File Nº: 373 */

  IF OBJECT_ID ('LOG_xgParGen' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_xgParGen ON xgParGen   /* File Nº: 374 */

  IF OBJECT_ID ('LOG_xgTipCon' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_xgTipCon ON xgTipCon   /* File Nº: 375 */

  IF OBJECT_ID ('LOG_xgVersiones' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_xgVersiones ON xgVersiones   /* File Nº: 376 */

  IF OBJECT_ID ('LOG_zcAgeCom' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_zcAgeCom ON zcAgeCom   /* File Nº: 377 */

  IF OBJECT_ID ('LOG_xgPeriodos' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_xgPeriodos ON xgPeriodos   /* File Nº: 378 */

  IF OBJECT_ID ('LOG_xmSqlCat' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_xmSqlCat ON xmSqlCat   /* File Nº: 379 */

  IF OBJECT_ID ('LOG_xmSqlCol' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_xmSqlCol ON xmSqlCol   /* File Nº: 380 */

  IF OBJECT_ID ('LOG_xmSqlRes' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_xmSqlRes ON xmSqlRes   /* File Nº: 381 */

  IF OBJECT_ID ('LOG_xmSqlCab' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_xmSqlCab ON xmSqlCab   /* File Nº: 382 */

  IF OBJECT_ID ('LOG_xxSqlRe2' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_xxSqlRe2 ON xxSqlRe2   /* File Nº: 383 */

  IF OBJECT_ID ('LOG_zmCoTrDR' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_zmCoTrDR ON zmCoTrDR   /* File Nº: 384 */

  IF OBJECT_ID ('LOG_zmDeRoFa' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_zmDeRoFa ON zmDeRoFa   /* File Nº: 385 */

  IF OBJECT_ID ('LOG_zmDeFact' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_zmDeFact ON zmDeFact   /* File Nº: 386 */

  IF OBJECT_ID ('LOG_xcGenCfg' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_xcGenCfg ON xcGenCfg   /* File Nº: 387 */

  IF OBJECT_ID ('LOG_xcGenCoD' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_xcGenCoD ON xcGenCoD   /* File Nº: 388 */

  IF OBJECT_ID ('LOG_xmGenLot' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_xmGenLot ON xmGenLot   /* File Nº: 389 */

  IF OBJECT_ID ('LOG_xcGenCoC' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_xcGenCoC ON xcGenCoC   /* File Nº: 390 */

  IF OBJECT_ID ('LOG_ucCatego' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_ucCatego ON ucCatego   /* File Nº: 391 */

  IF OBJECT_ID ('LOG_ucTipEmp' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_ucTipEmp ON ucTipEmp   /* File Nº: 392 */

  IF OBJECT_ID ('LOG_ucProvincias' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_ucProvincias ON ucProvincias   /* File Nº: 393 */

  IF OBJECT_ID ('LOG_ucAFJP' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_ucAFJP ON ucAFJP   /* File Nº: 394 */

  IF OBJECT_ID ('LOG_ugEmpresa' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_ugEmpresa ON ugEmpresa   /* File Nº: 395 */

  IF OBJECT_ID ('LOG_ucCodAct' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_ucCodAct ON ucCodAct   /* File Nº: 396 */

  IF OBJECT_ID ('LOG_ucCodCon' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_ucCodCon ON ucCodCon   /* File Nº: 397 */

  IF OBJECT_ID ('LOG_ucCodZon' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_ucCodZon ON ucCodZon   /* File Nº: 398 */

  IF OBJECT_ID ('LOG_ucCoSini' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_ucCoSini ON ucCoSini   /* File Nº: 399 */

  IF OBJECT_ID ('LOG_ucObrSoc' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_ucObrSoc ON ucObrSoc   /* File Nº: 400 */

  IF OBJECT_ID ('LOG_ucConDM' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_ucConDM ON ucConDM   /* File Nº: 401 */

  IF OBJECT_ID ('LOG_ucConTiL' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_ucConTiL ON ucConTiL   /* File Nº: 402 */

  IF OBJECT_ID ('LOG_ucCodSit' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_ucCodSit ON ucCodSit   /* File Nº: 403 */

  IF OBJECT_ID ('LOG_ucConVig' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_ucConVig ON ucConVig   /* File Nº: 404 */

  IF OBJECT_ID ('LOG_ucConPer' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_ucConPer ON ucConPer   /* File Nº: 405 */

  IF OBJECT_ID ('LOG_ucConDA' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_ucConDA ON ucConDA   /* File Nº: 406 */

  IF OBJECT_ID ('LOG_ucSitRev' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_ucSitRev ON ucSitRev   /* File Nº: 407 */

  IF OBJECT_ID ('LOG_ucCenCos' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_ucCenCos ON ucCenCos   /* File Nº: 408 */

  IF OBJECT_ID ('LOG_ucConTiC' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_ucConTiC ON ucConTiC   /* File Nº: 409 */

  IF OBJECT_ID ('LOG_ucForPag' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_ucForPag ON ucForPag   /* File Nº: 410 */

  IF OBJECT_ID ('LOG_xcActCom' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_xcActCom ON xcActCom   /* File Nº: 411 */

  IF OBJECT_ID ('LOG_ucCalPro' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_ucCalPro ON ucCalPro   /* File Nº: 412 */

  IF OBJECT_ID ('LOG_umLegPer' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_umLegPer ON umLegPer   /* File Nº: 413 */

  IF OBJECT_ID ('LOG_ucMotEgr' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_ucMotEgr ON ucMotEgr   /* File Nº: 414 */

  IF OBJECT_ID ('LOG_ucConLiq' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_ucConLiq ON ucConLiq   /* File Nº: 415 */

  IF OBJECT_ID ('LOG_xmUsuVen' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_xmUsuVen ON xmUsuVen   /* File Nº: 416 */

  IF OBJECT_ID ('LOG_ucLugPag' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_ucLugPag ON ucLugPag   /* File Nº: 417 */

  IF OBJECT_ID ('LOG_ucMatCab' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_ucMatCab ON ucMatCab   /* File Nº: 418 */

  IF OBJECT_ID ('LOG_ucLocalidad' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_ucLocalidad ON ucLocalidad   /* File Nº: 419 */

  IF OBJECT_ID ('LOG_xmLogTrig' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_xmLogTrig ON xmLogTrig   /* File Nº: 420 */

  IF OBJECT_ID ('LOG_xmPadronCont' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_xmPadronCont ON xmPadronCont   /* File Nº: 421 */

  IF OBJECT_ID ('LOG_ucMatDet' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_ucMatDet ON ucMatDet   /* File Nº: 422 */

  IF OBJECT_ID ('LOG_ucRelLab' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_ucRelLab ON ucRelLab   /* File Nº: 423 */

  IF OBJECT_ID ('LOG_ucParent' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_ucParent ON ucParent   /* File Nº: 424 */

  IF OBJECT_ID ('LOG_ucEscola' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_ucEscola ON ucEscola   /* File Nº: 425 */

  IF OBJECT_ID ('LOG_ucEstCiv' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_ucEstCiv ON ucEstCiv   /* File Nº: 426 */

  IF OBJECT_ID ('LOG_ucSindic' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_ucSindic ON ucSindic   /* File Nº: 427 */

  IF OBJECT_ID ('LOG_ucSeccio' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_ucSeccio ON ucSeccio   /* File Nº: 428 */

  IF OBJECT_ID ('LOG_umLegHSa' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_umLegHSa ON umLegHSa   /* File Nº: 429 */

  IF OBJECT_ID ('LOG_umLegRVa' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_umLegRVa ON umLegRVa   /* File Nº: 430 */

  IF OBJECT_ID ('LOG_umLegHPEn' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_umLegHPEn ON umLegHPEn   /* File Nº: 431 */

  IF OBJECT_ID ('LOG_umLegHPEs' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_umLegHPEs ON umLegHPEs   /* File Nº: 432 */

  IF OBJECT_ID ('LOG_umLegHEm' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_umLegHEm ON umLegHEm   /* File Nº: 433 */

  IF OBJECT_ID ('LOG_umLegVal' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_umLegVal ON umLegVal   /* File Nº: 434 */

  IF OBJECT_ID ('LOG_umLegFam' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_umLegFam ON umLegFam   /* File Nº: 435 */

  IF OBJECT_ID ('LOG_umLiquid' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_umLiquid ON umLiquid   /* File Nº: 436 */

  IF OBJECT_ID ('LOG_ugPerConsul' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_ugPerConsul ON ugPerConsul   /* File Nº: 437 */

  IF OBJECT_ID ('LOG_umLiqLeD' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_umLiqLeD ON umLiqLeD   /* File Nº: 438 */

  IF OBJECT_ID ('LOG_umLiqLeC' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_umLiqLeC ON umLiqLeC   /* File Nº: 439 */

  IF OBJECT_ID ('LOG_umConLeg' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_umConLeg ON umConLeg   /* File Nº: 440 */

  IF OBJECT_ID ('LOG_utParSue' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_utParSue ON utParSue   /* File Nº: 441 */

  IF OBJECT_ID ('LOG_zmMovCaR' , 'TR') <> 0
     DISABLE TRIGGER dbo.LOG_zmMovCaR ON zmMovCaR   /* File Nº: 442 */

END

GO
/****** Object:  StoredProcedure [dbo].[PLANEON_Log_EnableTriggers]    Script Date: 19/01/2020 16:51:06 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[PLANEON_Log_EnableTriggers]
AS
BEGIN

  IF OBJECT_ID ('LOG_otParGen' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_otParGen ON otParGen   /* File Nº: 1 */

  IF OBJECT_ID ('LOG_xgAfipComp' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_xgAfipComp ON xgAfipComp   /* File Nº: 2 */

  IF OBJECT_ID ('LOG_DataLog' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_DataLog ON DataLog   /* File Nº: 3 */

  IF OBJECT_ID ('LOG_vmAyuEco' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_vmAyuEco ON vmAyuEco   /* File Nº: 4 */

  IF OBJECT_ID ('LOG_icUniMov' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_icUniMov ON icUniMov   /* File Nº: 5 */

  IF OBJECT_ID ('LOG_icTipMov' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_icTipMov ON icTipMov   /* File Nº: 6 */

  IF OBJECT_ID ('LOG_icPlaMant' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_icPlaMant ON icPlaMant   /* File Nº: 7 */

  IF OBJECT_ID ('LOG_icMarcas' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_icMarcas ON icMarcas   /* File Nº: 8 */

  IF OBJECT_ID ('LOG_vcClieAdhe' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_vcClieAdhe ON vcClieAdhe   /* File Nº: 9 */

  IF OBJECT_ID ('LOG_vcCliHisEve' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_vcCliHisEve ON vcCliHisEve   /* File Nº: 10 */

  IF OBJECT_ID ('LOG_smInvSto' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_smInvSto ON smInvSto   /* File Nº: 11 */

  IF OBJECT_ID ('LOG_vcConVeT' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_vcConVeT ON vcConVeT   /* File Nº: 12 */

  IF OBJECT_ID ('LOG_vmSegPed' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_vmSegPed ON vmSegPed   /* File Nº: 13 */

  IF OBJECT_ID ('LOG_scArtDef' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_scArtDef ON scArtDef   /* File Nº: 14 */

  IF OBJECT_ID ('LOG_omIdMovF' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_omIdMovF ON omIdMovF   /* File Nº: 15 */

  IF OBJECT_ID ('LOG_vcDefCit' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_vcDefCit ON vcDefCit   /* File Nº: 16 */

  IF OBJECT_ID ('LOG_ccDefCit' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_ccDefCit ON ccDefCit   /* File Nº: 17 */

  IF OBJECT_ID ('LOG_vcConVeC' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_vcConVeC ON vcConVeC   /* File Nº: 18 */

  IF OBJECT_ID ('LOG_ccTReGCa' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_ccTReGCa ON ccTReGCa   /* File Nº: 19 */

  IF OBJECT_ID ('LOG_vcCConci' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_vcCConci ON vcCConci   /* File Nº: 20 */

  IF OBJECT_ID ('LOG_vcCliBen' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_vcCliBen ON vcCliBen   /* File Nº: 21 */

  IF OBJECT_ID ('LOG_omAsiCab' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_omAsiCab ON omAsiCab   /* File Nº: 22 */

  IF OBJECT_ID ('LOG_ocCotDet' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_ocCotDet ON ocCotDet   /* File Nº: 23 */

  IF OBJECT_ID ('LOG_ocIndDet' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_ocIndDet ON ocIndDet   /* File Nº: 24 */

  IF OBJECT_ID ('LOG_ccCConci' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_ccCConci ON ccCConci   /* File Nº: 25 */

  IF OBJECT_ID ('LOG_ocIndCab' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_ocIndCab ON ocIndCab   /* File Nº: 26 */

  IF OBJECT_ID ('LOG_ocPlaCCo' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_ocPlaCCo ON ocPlaCCo   /* File Nº: 27 */

  IF OBJECT_ID ('LOG_ocCotCab' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_ocCotCab ON ocCotCab   /* File Nº: 28 */

  IF OBJECT_ID ('LOG_omAsiDet' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_omAsiDet ON omAsiDet   /* File Nº: 29 */

  IF OBJECT_ID ('LOG_omAsiCci' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_omAsiCci ON omAsiCci   /* File Nº: 30 */

  IF OBJECT_ID ('LOG_fcCleChe' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_fcCleChe ON fcCleChe   /* File Nº: 31 */

  IF OBJECT_ID ('LOG_ocPlaCue' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_ocPlaCue ON ocPlaCue   /* File Nº: 32 */

  IF OBJECT_ID ('LOG_ccTReGes' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_ccTReGes ON ccTReGes   /* File Nº: 33 */

  IF OBJECT_ID ('LOG_ocCenCos' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_ocCenCos ON ocCenCos   /* File Nº: 34 */

  IF OBJECT_ID ('LOG_ccDestFa' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_ccDestFa ON ccDestFa   /* File Nº: 35 */

  IF OBJECT_ID ('LOG_omBanInt' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_omBanInt ON omBanInt   /* File Nº: 36 */

  IF OBJECT_ID ('LOG_cmComRGa' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_cmComRGa ON cmComRGa   /* File Nº: 37 */

  IF OBJECT_ID ('LOG_cmComVen' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_cmComVen ON cmComVen   /* File Nº: 38 */

  IF OBJECT_ID ('LOG_vcDefCom' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_vcDefCom ON vcDefCom   /* File Nº: 39 */

  IF OBJECT_ID ('LOG_ccSector' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_ccSector ON ccSector   /* File Nº: 40 */

  IF OBJECT_ID ('LOG_fmMovCaC' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_fmMovCaC ON fmMovCaC   /* File Nº: 41 */

  IF OBJECT_ID ('LOG_xmRegSus' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_xmRegSus ON xmRegSus   /* File Nº: 42 */

  IF OBJECT_ID ('LOG_cmEstPro' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_cmEstPro ON cmEstPro   /* File Nº: 43 */

  IF OBJECT_ID ('LOG_fcConChe' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_fcConChe ON fcConChe   /* File Nº: 44 */

  IF OBJECT_ID ('LOG_cmRefDeC' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_cmRefDeC ON cmRefDeC   /* File Nº: 45 */

  IF OBJECT_ID ('LOG_fcDefCom' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_fcDefCom ON fcDefCom   /* File Nº: 46 */

  IF OBJECT_ID ('LOG_fcTiMoBa' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_fcTiMoBa ON fcTiMoBa   /* File Nº: 47 */

  IF OBJECT_ID ('LOG_fcCueBan' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_fcCueBan ON fcCueBan   /* File Nº: 48 */

  IF OBJECT_ID ('LOG_vmConciD' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_vmConciD ON vmConciD   /* File Nº: 49 */

  IF OBJECT_ID ('LOG_fmExtBaD' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_fmExtBaD ON fmExtBaD   /* File Nº: 50 */

  IF OBJECT_ID ('LOG_fcBanBCR' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_fcBanBCR ON fcBanBCR   /* File Nº: 51 */

  IF OBJECT_ID ('LOG_smLotCom' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_smLotCom ON smLotCom   /* File Nº: 52 */

  IF OBJECT_ID ('LOG_fmMovCaD' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_fmMovCaD ON fmMovCaD   /* File Nº: 53 */

  IF OBJECT_ID ('LOG_kmVtaPreC' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_kmVtaPreC ON kmVtaPreC   /* File Nº: 54 */

  IF OBJECT_ID ('LOG_fmLiqOtC' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_fmLiqOtC ON fmLiqOtC   /* File Nº: 55 */

  IF OBJECT_ID ('LOG_fcEmpTar' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_fcEmpTar ON fcEmpTar   /* File Nº: 56 */

  IF OBJECT_ID ('LOG_fmPlaCaj' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_fmPlaCaj ON fmPlaCaj   /* File Nº: 57 */

  IF OBJECT_ID ('LOG_fmIdTiMo' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_fmIdTiMo ON fmIdTiMo   /* File Nº: 58 */

  IF OBJECT_ID ('LOG_fcDefTal' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_fcDefTal ON fcDefTal   /* File Nº: 59 */

  IF OBJECT_ID ('LOG_ccConCoD' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_ccConCoD ON ccConCoD   /* File Nº: 60 */

  IF OBJECT_ID ('LOG_fcEmplea' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_fcEmplea ON fcEmplea   /* File Nº: 61 */

  IF OBJECT_ID ('LOG_xcZonas' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_xcZonas ON xcZonas   /* File Nº: 62 */

  IF OBJECT_ID ('LOG_fmGenTxD' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_fmGenTxD ON fmGenTxD   /* File Nº: 63 */

  IF OBJECT_ID ('LOG_fmGenTxC' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_fmGenTxC ON fmGenTxC   /* File Nº: 64 */

  IF OBJECT_ID ('LOG_ccClaCom' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_ccClaCom ON ccClaCom   /* File Nº: 65 */

  IF OBJECT_ID ('LOG_fmLiqRta' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_fmLiqRta ON fmLiqRta   /* File Nº: 66 */

  IF OBJECT_ID ('LOG_fmCuoMuT' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_fmCuoMuT ON fmCuoMuT   /* File Nº: 67 */

  IF OBJECT_ID ('LOG_fcDefUsu' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_fcDefUsu ON fcDefUsu   /* File Nº: 68 */

  IF OBJECT_ID ('LOG_fmExtBaC' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_fmExtBaC ON fmExtBaC   /* File Nº: 69 */

  IF OBJECT_ID ('LOG_fmRefCoB' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_fmRefCoB ON fmRefCoB   /* File Nº: 70 */

  IF OBJECT_ID ('LOG_fmCuoLiq' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_fmCuoLiq ON fmCuoLiq   /* File Nº: 71 */

  IF OBJECT_ID ('LOG_fmMovChe' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_fmMovChe ON fmMovChe   /* File Nº: 72 */

  IF OBJECT_ID ('LOG_ccResCom' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_ccResCom ON ccResCom   /* File Nº: 73 */

  IF OBJECT_ID ('LOG_fmLiqTar' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_fmLiqTar ON fmLiqTar   /* File Nº: 74 */

  IF OBJECT_ID ('LOG_fmLiqFin' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_fmLiqFin ON fmLiqFin   /* File Nº: 75 */

  IF OBJECT_ID ('LOG_fmPreOtC' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_fmPreOtC ON fmPreOtC   /* File Nº: 76 */

  IF OBJECT_ID ('LOG_icCaHmKm' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_icCaHmKm ON icCaHmKm   /* File Nº: 77 */

  IF OBJECT_ID ('LOG_fmPlaSin' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_fmPlaSin ON fmPlaSin   /* File Nº: 78 */

  IF OBJECT_ID ('LOG_icTareas' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_icTareas ON icTareas   /* File Nº: 79 */

  IF OBJECT_ID ('LOG_vpPerVen' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_vpPerVen ON vpPerVen   /* File Nº: 80 */

  IF OBJECT_ID ('LOG_ccConCoC' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_ccConCoC ON ccConCoC   /* File Nº: 81 */

  IF OBJECT_ID ('LOG_fmLotCon' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_fmLotCon ON fmLotCon   /* File Nº: 82 */

  IF OBJECT_ID ('LOG_ccObsCal' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_ccObsCal ON ccObsCal   /* File Nº: 83 */

  IF OBJECT_ID ('LOG_fmPreTar' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_fmPreTar ON fmPreTar   /* File Nº: 84 */

  IF OBJECT_ID ('LOG_vmLotCpt' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_vmLotCpt ON vmLotCpt   /* File Nº: 85 */

  IF OBJECT_ID ('LOG_mmRegCrC' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_mmRegCrC ON mmRegCrC   /* File Nº: 86 */

  IF OBJECT_ID ('LOG_xgSitIva' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_xgSitIva ON xgSitIva   /* File Nº: 87 */

  IF OBJECT_ID ('LOG_mcReClCr' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_mcReClCr ON mcReClCr   /* File Nº: 88 */

  IF OBJECT_ID ('LOG_mcEmpFin' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_mcEmpFin ON mcEmpFin   /* File Nº: 89 */

  IF OBJECT_ID ('LOG_xgProvin' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_xgProvin ON xgProvin   /* File Nº: 90 */

  IF OBJECT_ID ('LOG_xcPaises' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_xcPaises ON xcPaises   /* File Nº: 91 */

  IF OBJECT_ID ('LOG_ocCarTra' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_ocCarTra ON ocCarTra   /* File Nº: 92 */

  IF OBJECT_ID ('LOG_kmVtaPreD' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_kmVtaPreD ON kmVtaPreD   /* File Nº: 93 */

  IF OBJECT_ID ('LOG_mcOpCuCa' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_mcOpCuCa ON mcOpCuCa   /* File Nº: 94 */

  IF OBJECT_ID ('LOG_mmTarPos' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_mmTarPos ON mmTarPos   /* File Nº: 95 */

  IF OBJECT_ID ('LOG_mcOpCuDe' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_mcOpCuDe ON mcOpCuDe   /* File Nº: 96 */

  IF OBJECT_ID ('LOG_fpParInf' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_fpParInf ON fpParInf   /* File Nº: 97 */

  IF OBJECT_ID ('LOG_mmResCab' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_mmResCab ON mmResCab   /* File Nº: 98 */

  IF OBJECT_ID ('LOG_omAsiGCa' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_omAsiGCa ON omAsiGCa   /* File Nº: 99 */

  IF OBJECT_ID ('LOG_omAsiGCc' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_omAsiGCc ON omAsiGCc   /* File Nº: 100 */

  IF OBJECT_ID ('LOG_vcActivi' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_vcActivi ON vcActivi   /* File Nº: 101 */

  IF OBJECT_ID ('LOG_omAsiGDe' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_omAsiGDe ON omAsiGDe   /* File Nº: 102 */

  IF OBJECT_ID ('LOG_vcSucurs' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_vcSucurs ON vcSucurs   /* File Nº: 103 */

  IF OBJECT_ID ('LOG_ocCanCos' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_ocCanCos ON ocCanCos   /* File Nº: 104 */

  IF OBJECT_ID ('LOG_scCenSto' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_scCenSto ON scCenSto   /* File Nº: 105 */

  IF OBJECT_ID ('LOG_omSumBal' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_omSumBal ON omSumBal   /* File Nº: 106 */

  IF OBJECT_ID ('LOG_vcTraFle' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_vcTraFle ON vcTraFle   /* File Nº: 107 */

  IF OBJECT_ID ('LOG_scArtDcS' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_scArtDcS ON scArtDcS   /* File Nº: 108 */

  IF OBJECT_ID ('LOG_scRubros' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_scRubros ON scRubros   /* File Nº: 109 */

  IF OBJECT_ID ('LOG_ocPreAsC' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_ocPreAsC ON ocPreAsC   /* File Nº: 110 */

  IF OBJECT_ID ('LOG_ocPreAsD' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_ocPreAsD ON ocPreAsD   /* File Nº: 111 */

  IF OBJECT_ID ('LOG_vcPunVen' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_vcPunVen ON vcPunVen   /* File Nº: 112 */

  IF OBJECT_ID ('LOG_opPerCon' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_opPerCon ON opPerCon   /* File Nº: 113 */

  IF OBJECT_ID ('LOG_omRegTra' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_omRegTra ON omRegTra   /* File Nº: 114 */

  IF OBJECT_ID ('LOG_vcCliDom' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_vcCliDom ON vcCliDom   /* File Nº: 115 */

  IF OBJECT_ID ('LOG_omIdGene' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_omIdGene ON omIdGene   /* File Nº: 116 */

  IF OBJECT_ID ('LOG_xgTarPro' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_xgTarPro ON xgTarPro   /* File Nº: 117 */

  IF OBJECT_ID ('LOG_omAcuPer' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_omAcuPer ON omAcuPer   /* File Nº: 118 */

  IF OBJECT_ID ('LOG_vcClient' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_vcClient ON vcClient   /* File Nº: 119 */

  IF OBJECT_ID ('LOG_omAsiCaR' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_omAsiCaR ON omAsiCaR   /* File Nº: 120 */

  IF OBJECT_ID ('LOG_omAsiRes' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_omAsiRes ON omAsiRes   /* File Nº: 121 */

  IF OBJECT_ID ('LOG_ocTipCue' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_ocTipCue ON ocTipCue   /* File Nº: 122 */

  IF OBJECT_ID ('LOG_omAsiDeR' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_omAsiDeR ON omAsiDeR   /* File Nº: 123 */

  IF OBJECT_ID ('LOG_fcLocBan' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_fcLocBan ON fcLocBan   /* File Nº: 124 */

  IF OBJECT_ID ('LOG_omCtrlPAc' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_omCtrlPAc ON omCtrlPAc   /* File Nº: 125 */

  IF OBJECT_ID ('LOG_mcMutual' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_mcMutual ON mcMutual   /* File Nº: 126 */

  IF OBJECT_ID ('LOG_omCtrlCab' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_omCtrlCab ON omCtrlCab   /* File Nº: 127 */

  IF OBJECT_ID ('LOG_vcVended' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_vcVended ON vcVended   /* File Nº: 128 */

  IF OBJECT_ID ('LOG_scDefTal' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_scDefTal ON scDefTal   /* File Nº: 129 */

  IF OBJECT_ID ('LOG_omEsConC' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_omEsConC ON omEsConC   /* File Nº: 130 */

  IF OBJECT_ID ('LOG_omCtrlPer' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_omCtrlPer ON omCtrlPer   /* File Nº: 131 */

  IF OBJECT_ID ('LOG_xcPictures' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_xcPictures ON xcPictures   /* File Nº: 132 */

  IF OBJECT_ID ('LOG_omEsConD' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_omEsConD ON omEsConD   /* File Nº: 133 */

  IF OBJECT_ID ('LOG_omEsConR' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_omEsConR ON omEsConR   /* File Nº: 134 */

  IF OBJECT_ID ('LOG_omPeFCab' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_omPeFCab ON omPeFCab   /* File Nº: 135 */

  IF OBJECT_ID ('LOG_omIdHisD' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_omIdHisD ON omIdHisD   /* File Nº: 136 */

  IF OBJECT_ID ('LOG_omPeFDet' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_omPeFDet ON omPeFDet   /* File Nº: 137 */

  IF OBJECT_ID ('LOG_omCtrlRes' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_omCtrlRes ON omCtrlRes   /* File Nº: 138 */

  IF OBJECT_ID ('LOG_omIdComp' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_omIdComp ON omIdComp   /* File Nº: 139 */

  IF OBJECT_ID ('LOG_omIdHisC' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_omIdHisC ON omIdHisC   /* File Nº: 140 */

  IF OBJECT_ID ('LOG_scDefCom' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_scDefCom ON scDefCom   /* File Nº: 141 */

  IF OBJECT_ID ('LOG_omCtrlDet' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_omCtrlDet ON omCtrlDet   /* File Nº: 142 */

  IF OBJECT_ID ('LOG_pcArmIns' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_pcArmIns ON pcArmIns   /* File Nº: 143 */

  IF OBJECT_ID ('LOG_pmOtELab' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_pmOtELab ON pmOtELab   /* File Nº: 144 */

  IF OBJECT_ID ('LOG_fmMovCci' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_fmMovCci ON fmMovCci   /* File Nº: 145 */

  IF OBJECT_ID ('LOG_pcArmFEs' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_pcArmFEs ON pcArmFEs   /* File Nº: 146 */

  IF OBJECT_ID ('LOG_pcTecMpC' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_pcTecMpC ON pcTecMpC   /* File Nº: 147 */

  IF OBJECT_ID ('LOG_vcActDGI' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_vcActDGI ON vcActDGI   /* File Nº: 148 */

  IF OBJECT_ID ('LOG_vcAdmSto' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_vcAdmSto ON vcAdmSto   /* File Nº: 149 */

  IF OBJECT_ID ('LOG_vcTraImp' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_vcTraImp ON vcTraImp   /* File Nº: 150 */

  IF OBJECT_ID ('LOG_pcArmFor' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_pcArmFor ON pcArmFor   /* File Nº: 151 */

  IF OBJECT_ID ('LOG_fpPreLiq' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_fpPreLiq ON fpPreLiq   /* File Nº: 152 */

  IF OBJECT_ID ('LOG_pmParTar' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_pmParTar ON pmParTar   /* File Nº: 153 */

  IF OBJECT_ID ('LOG_scArtPoo' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_scArtPoo ON scArtPoo   /* File Nº: 154 */

  IF OBJECT_ID ('LOG_pcTecMpO' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_pcTecMpO ON pcTecMpO   /* File Nº: 155 */

  IF OBJECT_ID ('LOG_pcTecMpE' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_pcTecMpE ON pcTecMpE   /* File Nº: 156 */

  IF OBJECT_ID ('LOG_vcCliCre' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_vcCliCre ON vcCliCre   /* File Nº: 157 */

  IF OBJECT_ID ('LOG_scColor' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_scColor ON scColor   /* File Nº: 158 */

  IF OBJECT_ID ('LOG_pcProcFa' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_pcProcFa ON pcProcFa   /* File Nº: 159 */

  IF OBJECT_ID ('LOG_pmPlaEnv' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_pmPlaEnv ON pmPlaEnv   /* File Nº: 160 */

  IF OBJECT_ID ('LOG_ptParPro' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_ptParPro ON ptParPro   /* File Nº: 161 */

  IF OBJECT_ID ('LOG_rtLugarCarga' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_rtLugarCarga ON rtLugarCarga   /* File Nº: 162 */

  IF OBJECT_ID ('LOG_rtDestComer' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_rtDestComer ON rtDestComer   /* File Nº: 163 */

  IF OBJECT_ID ('LOG_scEnvases' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_scEnvases ON scEnvases   /* File Nº: 164 */

  IF OBJECT_ID ('LOG_scAdmSto' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_scAdmSto ON scAdmSto   /* File Nº: 165 */

  IF OBJECT_ID ('LOG_rtCanalComer' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_rtCanalComer ON rtCanalComer   /* File Nº: 166 */

  IF OBJECT_ID ('LOG_vcDefAsC' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_vcDefAsC ON vcDefAsC   /* File Nº: 167 */

  IF OBJECT_ID ('LOG_rtLugarDesca' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_rtLugarDesca ON rtLugarDesca   /* File Nº: 168 */

  IF OBJECT_ID ('LOG_scDefPun' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_scDefPun ON scDefPun   /* File Nº: 169 */

  IF OBJECT_ID ('LOG_vcDefPun' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_vcDefPun ON vcDefPun   /* File Nº: 170 */

  IF OBJECT_ID ('LOG_smComMov' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_smComMov ON smComMov   /* File Nº: 171 */

  IF OBJECT_ID ('LOG_scDefAsi' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_scDefAsi ON scDefAsi   /* File Nº: 172 */

  IF OBJECT_ID ('LOG_vmComCab' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_vmComCab ON vmComCab   /* File Nº: 173 */

  IF OBJECT_ID ('LOG_vmComArt' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_vmComArt ON vmComArt   /* File Nº: 174 */

  IF OBJECT_ID ('LOG_rmLiquidacion' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_rmLiquidacion ON rmLiquidacion   /* File Nº: 175 */

  IF OBJECT_ID ('LOG_scSubRub' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_scSubRub ON scSubRub   /* File Nº: 176 */

  IF OBJECT_ID ('LOG_rmPrecTeleFax' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_rmPrecTeleFax ON rmPrecTeleFax   /* File Nº: 177 */

  IF OBJECT_ID ('LOG_rmPrecProm' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_rmPrecProm ON rmPrecProm   /* File Nº: 178 */

  IF OBJECT_ID ('LOG_vtParGen' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_vtParGen ON vtParGen   /* File Nº: 179 */

  IF OBJECT_ID ('LOG_vcCliGru' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_vcCliGru ON vcCliGru   /* File Nº: 180 */

  IF OBJECT_ID ('LOG_vcLisPDe' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_vcLisPDe ON vcLisPDe   /* File Nº: 181 */

  IF OBJECT_ID ('LOG_vcConFac' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_vcConFac ON vcConFac   /* File Nº: 182 */

  IF OBJECT_ID ('LOG_vcCliLug' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_vcCliLug ON vcCliLug   /* File Nº: 183 */

  IF OBJECT_ID ('LOG_vcLisPCa' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_vcLisPCa ON vcLisPCa   /* File Nº: 184 */

  IF OBJECT_ID ('LOG_vcDefTal' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_vcDefTal ON vcDefTal   /* File Nº: 185 */

  IF OBJECT_ID ('LOG_scArticu' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_scArticu ON scArticu   /* File Nº: 186 */

  IF OBJECT_ID ('LOG_smComCab' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_smComCab ON smComCab   /* File Nº: 187 */

  IF OBJECT_ID ('LOG_rtPreDes' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_rtPreDes ON rtPreDes   /* File Nº: 188 */

  IF OBJECT_ID ('LOG_rtCosFleZon' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_rtCosFleZon ON rtCosFleZon   /* File Nº: 189 */

  IF OBJECT_ID ('LOG_xgLocali' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_xgLocali ON xgLocali   /* File Nº: 190 */

  IF OBJECT_ID ('LOG_vcDefUsu' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_vcDefUsu ON vcDefUsu   /* File Nº: 191 */

  IF OBJECT_ID ('LOG_vmLotVen' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_vmLotVen ON vmLotVen   /* File Nº: 192 */

  IF OBJECT_ID ('LOG_rtExistencias' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_rtExistencias ON rtExistencias   /* File Nº: 193 */

  IF OBJECT_ID ('LOG_rtRubClie' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_rtRubClie ON rtRubClie   /* File Nº: 194 */

  IF OBJECT_ID ('LOG_fcDefAsC' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_fcDefAsC ON fcDefAsC   /* File Nº: 195 */

  IF OBJECT_ID ('LOG_scArtCurD' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_scArtCurD ON scArtCurD   /* File Nº: 196 */

  IF OBJECT_ID ('LOG_fcModAsC' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_fcModAsC ON fcModAsC   /* File Nº: 197 */

  IF OBJECT_ID ('LOG_scArtCurC' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_scArtCurC ON scArtCurC   /* File Nº: 198 */

  IF OBJECT_ID ('LOG_scArtTLe' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_scArtTLe ON scArtTLe   /* File Nº: 199 */

  IF OBJECT_ID ('LOG_scTempor' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_scTempor ON scTempor   /* File Nº: 200 */

  IF OBJECT_ID ('LOG_vcModAsC' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_vcModAsC ON vcModAsC   /* File Nº: 201 */

  IF OBJECT_ID ('LOG_fcModAsD' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_fcModAsD ON fcModAsD   /* File Nº: 202 */

  IF OBJECT_ID ('LOG_scCenEnt' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_scCenEnt ON scCenEnt   /* File Nº: 203 */

  IF OBJECT_ID ('LOG_fcCueCaj' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_fcCueCaj ON fcCueCaj   /* File Nº: 204 */

  IF OBJECT_ID ('LOG_scArtTipo' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_scArtTipo ON scArtTipo   /* File Nº: 205 */

  IF OBJECT_ID ('LOG_scArtSus' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_scArtSus ON scArtSus   /* File Nº: 206 */

  IF OBJECT_ID ('LOG_ccProCre' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_ccProCre ON ccProCre   /* File Nº: 207 */

  IF OBJECT_ID ('LOG_vcProCli' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_vcProCli ON vcProCli   /* File Nº: 208 */

  IF OBJECT_ID ('LOG_ccProDom' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_ccProDom ON ccProDom   /* File Nº: 209 */

  IF OBJECT_ID ('LOG_vcLisOCa' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_vcLisOCa ON vcLisOCa   /* File Nº: 210 */

  IF OBJECT_ID ('LOG_scDefUsu' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_scDefUsu ON scDefUsu   /* File Nº: 211 */

  IF OBJECT_ID ('LOG_ccProvee' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_ccProvee ON ccProvee   /* File Nº: 212 */

  IF OBJECT_ID ('LOG_scSeccio' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_scSeccio ON scSeccio   /* File Nº: 213 */

  IF OBJECT_ID ('LOG_vcLisODe' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_vcLisODe ON vcLisODe   /* File Nº: 214 */

  IF OBJECT_ID ('LOG_smComInv' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_smComInv ON smComInv   /* File Nº: 215 */

  IF OBJECT_ID ('LOG_ccProGru' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_ccProGru ON ccProGru   /* File Nº: 216 */

  IF OBJECT_ID ('LOG_scRubGru' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_scRubGru ON scRubGru   /* File Nº: 217 */

  IF OBJECT_ID ('LOG_xgSitInB' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_xgSitInB ON xgSitInB   /* File Nº: 218 */

  IF OBJECT_ID ('LOG_smSimAct' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_smSimAct ON smSimAct   /* File Nº: 219 */

  IF OBJECT_ID ('LOG_ccConFac' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_ccConFac ON ccConFac   /* File Nº: 220 */

  IF OBJECT_ID ('LOG_vcModAsD' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_vcModAsD ON vcModAsD   /* File Nº: 221 */

  IF OBJECT_ID ('LOG_ccDefAsC' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_ccDefAsC ON ccDefAsC   /* File Nº: 222 */

  IF OBJECT_ID ('LOG_xgDocDGI' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_xgDocDGI ON xgDocDGI   /* File Nº: 223 */

  IF OBJECT_ID ('LOG_smSimMov' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_smSimMov ON smSimMov   /* File Nº: 224 */

  IF OBJECT_ID ('LOG_tcAlumCarreas' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_tcAlumCarreas ON tcAlumCarreas   /* File Nº: 225 */

  IF OBJECT_ID ('LOG_tmLibMatDet' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_tmLibMatDet ON tmLibMatDet   /* File Nº: 226 */

  IF OBJECT_ID ('LOG_tmLibMatCab' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_tmLibMatCab ON tmLibMatCab   /* File Nº: 227 */

  IF OBJECT_ID ('LOG_tcYearCursado' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_tcYearCursado ON tcYearCursado   /* File Nº: 228 */

  IF OBJECT_ID ('LOG_tcSitCursado' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_tcSitCursado ON tcSitCursado   /* File Nº: 229 */

  IF OBJECT_ID ('LOG_tcSedes' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_tcSedes ON tcSedes   /* File Nº: 230 */

  IF OBJECT_ID ('LOG_tcReferentes' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_tcReferentes ON tcReferentes   /* File Nº: 231 */

  IF OBJECT_ID ('LOG_tcMateXCarreras' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_tcMateXCarreras ON tcMateXCarreras   /* File Nº: 232 */

  IF OBJECT_ID ('LOG_tcMaterias' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_tcMaterias ON tcMaterias   /* File Nº: 233 */

  IF OBJECT_ID ('LOG_tcLibrosMatrices' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_tcLibrosMatrices ON tcLibrosMatrices   /* File Nº: 234 */

  IF OBJECT_ID ('LOG_tcLibrosActas' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_tcLibrosActas ON tcLibrosActas   /* File Nº: 235 */

  IF OBJECT_ID ('LOG_tcDocumentacion' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_tcDocumentacion ON tcDocumentacion   /* File Nº: 236 */

  IF OBJECT_ID ('LOG_tcCursos' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_tcCursos ON tcCursos   /* File Nº: 237 */

  IF OBJECT_ID ('LOG_tcCursados' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_tcCursados ON tcCursados   /* File Nº: 238 */

  IF OBJECT_ID ('LOG_tcCondCursado' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_tcCondCursado ON tcCondCursado   /* File Nº: 239 */

  IF OBJECT_ID ('LOG_tcCarrera' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_tcCarrera ON tcCarrera   /* File Nº: 240 */

  IF OBJECT_ID ('LOG_tcAranceles' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_tcAranceles ON tcAranceles   /* File Nº: 241 */

  IF OBJECT_ID ('LOG_tcAlumnos' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_tcAlumnos ON tcAlumnos   /* File Nº: 242 */

  IF OBJECT_ID ('LOG_tcAlumDocu' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_tcAlumDocu ON tcAlumDocu   /* File Nº: 243 */

  IF OBJECT_ID ('LOG_ccDefCom' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_ccDefCom ON ccDefCom   /* File Nº: 244 */

  IF OBJECT_ID ('LOG_xgTipImp' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_xgTipImp ON xgTipImp   /* File Nº: 245 */

  IF OBJECT_ID ('LOG_ccDefPun' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_ccDefPun ON ccDefPun   /* File Nº: 246 */

  IF OBJECT_ID ('LOG_vmComCon' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_vmComCon ON vmComCon   /* File Nº: 247 */

  IF OBJECT_ID ('LOG_ccDefTal' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_ccDefTal ON ccDefTal   /* File Nº: 248 */

  IF OBJECT_ID ('LOG_vmMoClEv' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_vmMoClEv ON vmMoClEv   /* File Nº: 249 */

  IF OBJECT_ID ('LOG_UserWeb' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_UserWeb ON UserWeb   /* File Nº: 250 */

  IF OBJECT_ID ('LOG_vmRefCom' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_vmRefCom ON vmRefCom   /* File Nº: 251 */

  IF OBJECT_ID ('LOG_ccDefUsu' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_ccDefUsu ON ccDefUsu   /* File Nº: 252 */

  IF OBJECT_ID ('LOG_vcCliAre' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_vcCliAre ON vcCliAre   /* File Nº: 253 */

  IF OBJECT_ID ('LOG_vcCliCat' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_vcCliCat ON vcCliCat   /* File Nº: 254 */

  IF OBJECT_ID ('LOG_vmComImp' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_vmComImp ON vmComImp   /* File Nº: 255 */

  IF OBJECT_ID ('LOG_vmComMem' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_vmComMem ON vmComMem   /* File Nº: 256 */

  IF OBJECT_ID ('LOG_vcCliCan' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_vcCliCan ON vcCliCan   /* File Nº: 257 */

  IF OBJECT_ID ('LOG_ftParGen' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_ftParGen ON ftParGen   /* File Nº: 258 */

  IF OBJECT_ID ('LOG_vcCliCRM' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_vcCliCRM ON vcCliCRM   /* File Nº: 259 */

  IF OBJECT_ID ('LOG_pmOtCom' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_pmOtCom ON pmOtCom   /* File Nº: 260 */

  IF OBJECT_ID ('LOG_ccModAsC' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_ccModAsC ON ccModAsC   /* File Nº: 261 */

  IF OBJECT_ID ('LOG_vcConVeD' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_vcConVeD ON vcConVeD   /* File Nº: 262 */

  IF OBJECT_ID ('LOG_ucMotSan' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_ucMotSan ON ucMotSan   /* File Nº: 263 */

  IF OBJECT_ID ('LOG_vcJurEnt' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_vcJurEnt ON vcJurEnt   /* File Nº: 264 */

  IF OBJECT_ID ('LOG_ccModAsD' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_ccModAsD ON ccModAsD   /* File Nº: 265 */

  IF OBJECT_ID ('LOG_pcEstPro' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_pcEstPro ON pcEstPro   /* File Nº: 266 */

  IF OBJECT_ID ('LOG_pcCenTra' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_pcCenTra ON pcCenTra   /* File Nº: 267 */

  IF OBJECT_ID ('LOG_vcCliRes' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_vcCliRes ON vcCliRes   /* File Nº: 268 */

  IF OBJECT_ID ('LOG_pcTareas' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_pcTareas ON pcTareas   /* File Nº: 269 */

  IF OBJECT_ID ('LOG_pmOtCab' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_pmOtCab ON pmOtCab   /* File Nº: 270 */

  IF OBJECT_ID ('LOG_vcDefMtp' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_vcDefMtp ON vcDefMtp   /* File Nº: 271 */

  IF OBJECT_ID ('LOG_pmOtMov' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_pmOtMov ON pmOtMov   /* File Nº: 272 */

  IF OBJECT_ID ('LOG_pcCenImp' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_pcCenImp ON pcCenImp   /* File Nº: 273 */

  IF OBJECT_ID ('LOG_vcCliGar' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_vcCliGar ON vcCliGar   /* File Nº: 274 */

  IF OBJECT_ID ('LOG_vcProArt' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_vcProArt ON vcProArt   /* File Nº: 275 */

  IF OBJECT_ID ('LOG_vcCliPla' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_vcCliPla ON vcCliPla   /* File Nº: 276 */

  IF OBJECT_ID ('LOG_ccTraImp' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_ccTraImp ON ccTraImp   /* File Nº: 277 */

  IF OBJECT_ID ('LOG_pcImprod' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_pcImprod ON pcImprod   /* File Nº: 278 */

  IF OBJECT_ID ('LOG_vcCliDebAuto' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_vcCliDebAuto ON vcCliDebAuto   /* File Nº: 279 */

  IF OBJECT_ID ('LOG_vcTipEve' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_vcTipEve ON vcTipEve   /* File Nº: 280 */

  IF OBJECT_ID ('LOG_pcRutFab' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_pcRutFab ON pcRutFab   /* File Nº: 281 */

  IF OBJECT_ID ('LOG_vcLisPdc' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_vcLisPdc ON vcLisPdc   /* File Nº: 282 */

  IF OBJECT_ID ('LOG_umRetGan' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_umRetGan ON umRetGan   /* File Nº: 283 */

  IF OBJECT_ID ('LOG_cmComArt' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_cmComArt ON cmComArt   /* File Nº: 284 */

  IF OBJECT_ID ('LOG_ucDiagno' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_ucDiagno ON ucDiagno   /* File Nº: 285 */

  IF OBJECT_ID ('LOG_vcDefMAs' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_vcDefMAs ON vcDefMAs   /* File Nº: 286 */

  IF OBJECT_ID ('LOG_ccDefMAs' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_ccDefMAs ON ccDefMAs   /* File Nº: 287 */

  IF OBJECT_ID ('LOG_rgEmpresa' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_rgEmpresa ON rgEmpresa   /* File Nº: 288 */

  IF OBJECT_ID ('LOG_umLegRet' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_umLegRet ON umLegRet   /* File Nº: 289 */

  IF OBJECT_ID ('LOG_cmComCab' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_cmComCab ON cmComCab   /* File Nº: 290 */

  IF OBJECT_ID ('LOG_rpConsStock' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_rpConsStock ON rpConsStock   /* File Nº: 291 */

  IF OBJECT_ID ('LOG_cmComCon' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_cmComCon ON cmComCon   /* File Nº: 292 */

  IF OBJECT_ID ('LOG_rtRubros' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_rtRubros ON rtRubros   /* File Nº: 293 */

  IF OBJECT_ID ('LOG_cmComImp' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_cmComImp ON cmComImp   /* File Nº: 294 */

  IF OBJECT_ID ('LOG_vcLiComi' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_vcLiComi ON vcLiComi   /* File Nº: 295 */

  IF OBJECT_ID ('LOG_rgParametros' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_rgParametros ON rgParametros   /* File Nº: 296 */

  IF OBJECT_ID ('LOG_rmDetaStock' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_rmDetaStock ON rmDetaStock   /* File Nº: 297 */

  IF OBJECT_ID ('LOG_cmLotCom' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_cmLotCom ON cmLotCom   /* File Nº: 298 */

  IF OBJECT_ID ('LOG_vcLisDto' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_vcLisDto ON vcLisDto   /* File Nº: 299 */

  IF OBJECT_ID ('LOG_rtChoferes' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_rtChoferes ON rtChoferes   /* File Nº: 300 */

  IF OBJECT_ID ('LOG_cmRefCom' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_cmRefCom ON cmRefCom   /* File Nº: 301 */

  IF OBJECT_ID ('LOG_rmDetDetStock' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_rmDetDetStock ON rmDetDetStock   /* File Nº: 302 */

  IF OBJECT_ID ('LOG_cmConciD' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_cmConciD ON cmConciD   /* File Nº: 303 */

  IF OBJECT_ID ('LOG_vmCarJDe' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_vmCarJDe ON vmCarJDe   /* File Nº: 304 */

  IF OBJECT_ID ('LOG_vmCarJLo' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_vmCarJLo ON vmCarJLo   /* File Nº: 305 */

  IF OBJECT_ID ('LOG_vmVendLV' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_vmVendLV ON vmVendLV   /* File Nº: 306 */

  IF OBJECT_ID ('LOG_omPeFImg' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_omPeFImg ON omPeFImg   /* File Nº: 307 */

  IF OBJECT_ID ('LOG_rtTamanos' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_rtTamanos ON rtTamanos   /* File Nº: 308 */

  IF OBJECT_ID ('LOG_cpPerCom' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_cpPerCom ON cpPerCom   /* File Nº: 309 */

  IF OBJECT_ID ('LOG_rtVariedades' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_rtVariedades ON rtVariedades   /* File Nº: 310 */

  IF OBJECT_ID ('LOG_vmLiCDet' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_vmLiCDet ON vmLiCDet   /* File Nº: 311 */

  IF OBJECT_ID ('LOG_vmDepPla' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_vmDepPla ON vmDepPla   /* File Nº: 312 */

  IF OBJECT_ID ('LOG_vmComOrd' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_vmComOrd ON vmComOrd   /* File Nº: 313 */

  IF OBJECT_ID ('LOG_spPerSto' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_spPerSto ON spPerSto   /* File Nº: 314 */

  IF OBJECT_ID ('LOG_ctParGen' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_ctParGen ON ctParGen   /* File Nº: 315 */

  IF OBJECT_ID ('LOG_vmPedWeb' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_vmPedWeb ON vmPedWeb   /* File Nº: 316 */

  IF OBJECT_ID ('LOG_xLogCom' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_xLogCom ON xLogCom   /* File Nº: 317 */

  IF OBJECT_ID ('LOG_vcCliInfBan' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_vcCliInfBan ON vcCliInfBan   /* File Nº: 318 */

  IF OBJECT_ID ('LOG_mmResDet' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_mmResDet ON mmResDet   /* File Nº: 319 */

  IF OBJECT_ID ('LOG_vcCliXGar' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_vcCliXGar ON vcCliXGar   /* File Nº: 320 */

  IF OBJECT_ID ('LOG_rtMarcas' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_rtMarcas ON rtMarcas   /* File Nº: 321 */

  IF OBJECT_ID ('LOG_vmLiCCab' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_vmLiCCab ON vmLiCCab   /* File Nº: 322 */

  IF OBJECT_ID ('LOG_mmResCie' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_mmResCie ON mmResCie   /* File Nº: 323 */

  IF OBJECT_ID ('LOG_vmLicDeD' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_vmLicDeD ON vmLicDeD   /* File Nº: 324 */

  IF OBJECT_ID ('LOG_vcCliSep' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_vcCliSep ON vcCliSep   /* File Nº: 325 */

  IF OBJECT_ID ('LOG_vcCliMBa' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_vcCliMBa ON vcCliMBa   /* File Nº: 326 */

  IF OBJECT_ID ('LOG_vmDepPVD' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_vmDepPVD ON vmDepPVD   /* File Nº: 327 */

  IF OBJECT_ID ('LOG_vmLiCDeF' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_vmLiCDeF ON vmLiCDeF   /* File Nº: 328 */

  IF OBJECT_ID ('LOG_vmLiCRcD' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_vmLiCRcD ON vmLiCRcD   /* File Nº: 329 */

  IF OBJECT_ID ('LOG_vcCliZon' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_vcCliZon ON vcCliZon   /* File Nº: 330 */

  IF OBJECT_ID ('LOG_rtProductos' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_rtProductos ON rtProductos   /* File Nº: 331 */

  IF OBJECT_ID ('LOG_rtCompDeStock' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_rtCompDeStock ON rtCompDeStock   /* File Nº: 332 */

  IF OBJECT_ID ('LOG_vcForPag' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_vcForPag ON vcForPag   /* File Nº: 333 */

  IF OBJECT_ID ('LOG_vmHomReg' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_vmHomReg ON vmHomReg   /* File Nº: 334 */

  IF OBJECT_ID ('LOG_vmRefDeC' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_vmRefDeC ON vmRefDeC   /* File Nº: 335 */

  IF OBJECT_ID ('LOG_rmCabeStock' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_rmCabeStock ON rmCabeStock   /* File Nº: 336 */

  IF OBJECT_ID ('LOG_xgPueTra' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_xgPueTra ON xgPueTra   /* File Nº: 337 */

  IF OBJECT_ID ('LOG_rtLineaProducion' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_rtLineaProducion ON rtLineaProducion   /* File Nº: 338 */

  IF OBJECT_ID ('LOG_rtEnvases' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_rtEnvases ON rtEnvases   /* File Nº: 339 */

  IF OBJECT_ID ('LOG_rtCamaras' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_rtCamaras ON rtCamaras   /* File Nº: 340 */

  IF OBJECT_ID ('LOG_vcDefTMa' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_vcDefTMa ON vcDefTMa   /* File Nº: 341 */

  IF OBJECT_ID ('LOG_wcCamiones' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_wcCamiones ON wcCamiones   /* File Nº: 342 */

  IF OBJECT_ID ('LOG_xmSqlUsu' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_xmSqlUsu ON xmSqlUsu   /* File Nº: 343 */

  IF OBJECT_ID ('LOG_fmRegID_' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_fmRegID_ ON fmRegID_   /* File Nº: 344 */

  IF OBJECT_ID ('LOG_zcTipCua' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_zcTipCua ON zcTipCua   /* File Nº: 345 */

  IF OBJECT_ID ('LOG_zmCoTrDC' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_zmCoTrDC ON zmCoTrDC   /* File Nº: 346 */

  IF OBJECT_ID ('LOG_zcClaHac' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_zcClaHac ON zcClaHac   /* File Nº: 347 */

  IF OBJECT_ID ('LOG_wcFincas' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_wcFincas ON wcFincas   /* File Nº: 348 */

  IF OBJECT_ID ('LOG_vcFleTar' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_vcFleTar ON vcFleTar   /* File Nº: 349 */

  IF OBJECT_ID ('LOG_wcOrigDest' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_wcOrigDest ON wcOrigDest   /* File Nº: 350 */

  IF OBJECT_ID ('LOG_imComTar' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_imComTar ON imComTar   /* File Nº: 351 */

  IF OBJECT_ID ('LOG_wmPesadas' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_wmPesadas ON wmPesadas   /* File Nº: 352 */

  IF OBJECT_ID ('LOG_vmCarJCa' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_vmCarJCa ON vmCarJCa   /* File Nº: 353 */

  IF OBJECT_ID ('LOG_mmCoefCr' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_mmCoefCr ON mmCoefCr   /* File Nº: 354 */

  IF OBJECT_ID ('LOG_xgRegTer' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_xgRegTer ON xgRegTer   /* File Nº: 355 */

  IF OBJECT_ID ('LOG_vmHomEqu' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_vmHomEqu ON vmHomEqu   /* File Nº: 356 */

  IF OBJECT_ID ('LOG_cmLotAut' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_cmLotAut ON cmLotAut   /* File Nº: 357 */

  IF OBJECT_ID ('LOG_vmImpFisD' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_vmImpFisD ON vmImpFisD   /* File Nº: 358 */

  IF OBJECT_ID ('LOG_vmImpFisC' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_vmImpFisC ON vmImpFisC   /* File Nº: 359 */

  IF OBJECT_ID ('LOG_xmProEst' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_xmProEst ON xmProEst   /* File Nº: 360 */

  IF OBJECT_ID ('LOG_xcCodRee' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_xcCodRee ON xcCodRee   /* File Nº: 361 */

  IF OBJECT_ID ('LOG_xxSqlRes' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_xxSqlRes ON xxSqlRes   /* File Nº: 362 */

  IF OBJECT_ID ('LOG_zcProHac' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_zcProHac ON zcProHac   /* File Nº: 363 */

  IF OBJECT_ID ('LOG_vmSegMFd' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_vmSegMFd ON vmSegMFd   /* File Nº: 364 */

  IF OBJECT_ID ('LOG_vmHomLot' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_vmHomLot ON vmHomLot   /* File Nº: 365 */

  IF OBJECT_ID ('LOG_vmSegMFc' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_vmSegMFc ON vmSegMFc   /* File Nº: 366 */

  IF OBJECT_ID ('LOG_vcMotPen' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_vcMotPen ON vcMotPen   /* File Nº: 367 */

  IF OBJECT_ID ('LOG_wcEnvases' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_wcEnvases ON wcEnvases   /* File Nº: 368 */

  IF OBJECT_ID ('LOG_zcMatade' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_zcMatade ON zcMatade   /* File Nº: 369 */

  IF OBJECT_ID ('LOG_wgParametros' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_wgParametros ON wgParametros   /* File Nº: 370 */

  IF OBJECT_ID ('LOG_wpConsul' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_wpConsul ON wpConsul   /* File Nº: 371 */

  IF OBJECT_ID ('LOG_xgPueTEx' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_xgPueTEx ON xgPueTEx   /* File Nº: 372 */

  IF OBJECT_ID ('LOG_xgPueUsu' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_xgPueUsu ON xgPueUsu   /* File Nº: 373 */

  IF OBJECT_ID ('LOG_xgParGen' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_xgParGen ON xgParGen   /* File Nº: 374 */

  IF OBJECT_ID ('LOG_xgTipCon' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_xgTipCon ON xgTipCon   /* File Nº: 375 */

  IF OBJECT_ID ('LOG_xgVersiones' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_xgVersiones ON xgVersiones   /* File Nº: 376 */

  IF OBJECT_ID ('LOG_zcAgeCom' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_zcAgeCom ON zcAgeCom   /* File Nº: 377 */

  IF OBJECT_ID ('LOG_xgPeriodos' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_xgPeriodos ON xgPeriodos   /* File Nº: 378 */

  IF OBJECT_ID ('LOG_xmSqlCat' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_xmSqlCat ON xmSqlCat   /* File Nº: 379 */

  IF OBJECT_ID ('LOG_xmSqlCol' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_xmSqlCol ON xmSqlCol   /* File Nº: 380 */

  IF OBJECT_ID ('LOG_xmSqlRes' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_xmSqlRes ON xmSqlRes   /* File Nº: 381 */

  IF OBJECT_ID ('LOG_xmSqlCab' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_xmSqlCab ON xmSqlCab   /* File Nº: 382 */

  IF OBJECT_ID ('LOG_xxSqlRe2' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_xxSqlRe2 ON xxSqlRe2   /* File Nº: 383 */

  IF OBJECT_ID ('LOG_zmCoTrDR' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_zmCoTrDR ON zmCoTrDR   /* File Nº: 384 */

  IF OBJECT_ID ('LOG_zmDeRoFa' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_zmDeRoFa ON zmDeRoFa   /* File Nº: 385 */

  IF OBJECT_ID ('LOG_zmDeFact' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_zmDeFact ON zmDeFact   /* File Nº: 386 */

  IF OBJECT_ID ('LOG_xcGenCfg' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_xcGenCfg ON xcGenCfg   /* File Nº: 387 */

  IF OBJECT_ID ('LOG_xcGenCoD' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_xcGenCoD ON xcGenCoD   /* File Nº: 388 */

  IF OBJECT_ID ('LOG_xmGenLot' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_xmGenLot ON xmGenLot   /* File Nº: 389 */

  IF OBJECT_ID ('LOG_xcGenCoC' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_xcGenCoC ON xcGenCoC   /* File Nº: 390 */

  IF OBJECT_ID ('LOG_ucCatego' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_ucCatego ON ucCatego   /* File Nº: 391 */

  IF OBJECT_ID ('LOG_ucTipEmp' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_ucTipEmp ON ucTipEmp   /* File Nº: 392 */

  IF OBJECT_ID ('LOG_ucProvincias' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_ucProvincias ON ucProvincias   /* File Nº: 393 */

  IF OBJECT_ID ('LOG_ucAFJP' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_ucAFJP ON ucAFJP   /* File Nº: 394 */

  IF OBJECT_ID ('LOG_ugEmpresa' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_ugEmpresa ON ugEmpresa   /* File Nº: 395 */

  IF OBJECT_ID ('LOG_ucCodAct' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_ucCodAct ON ucCodAct   /* File Nº: 396 */

  IF OBJECT_ID ('LOG_ucCodCon' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_ucCodCon ON ucCodCon   /* File Nº: 397 */

  IF OBJECT_ID ('LOG_ucCodZon' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_ucCodZon ON ucCodZon   /* File Nº: 398 */

  IF OBJECT_ID ('LOG_ucCoSini' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_ucCoSini ON ucCoSini   /* File Nº: 399 */

  IF OBJECT_ID ('LOG_ucObrSoc' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_ucObrSoc ON ucObrSoc   /* File Nº: 400 */

  IF OBJECT_ID ('LOG_ucConDM' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_ucConDM ON ucConDM   /* File Nº: 401 */

  IF OBJECT_ID ('LOG_ucConTiL' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_ucConTiL ON ucConTiL   /* File Nº: 402 */

  IF OBJECT_ID ('LOG_ucCodSit' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_ucCodSit ON ucCodSit   /* File Nº: 403 */

  IF OBJECT_ID ('LOG_ucConVig' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_ucConVig ON ucConVig   /* File Nº: 404 */

  IF OBJECT_ID ('LOG_ucConPer' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_ucConPer ON ucConPer   /* File Nº: 405 */

  IF OBJECT_ID ('LOG_ucConDA' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_ucConDA ON ucConDA   /* File Nº: 406 */

  IF OBJECT_ID ('LOG_ucSitRev' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_ucSitRev ON ucSitRev   /* File Nº: 407 */

  IF OBJECT_ID ('LOG_ucCenCos' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_ucCenCos ON ucCenCos   /* File Nº: 408 */

  IF OBJECT_ID ('LOG_ucConTiC' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_ucConTiC ON ucConTiC   /* File Nº: 409 */

  IF OBJECT_ID ('LOG_ucForPag' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_ucForPag ON ucForPag   /* File Nº: 410 */

  IF OBJECT_ID ('LOG_xcActCom' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_xcActCom ON xcActCom   /* File Nº: 411 */

  IF OBJECT_ID ('LOG_ucCalPro' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_ucCalPro ON ucCalPro   /* File Nº: 412 */

  IF OBJECT_ID ('LOG_umLegPer' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_umLegPer ON umLegPer   /* File Nº: 413 */

  IF OBJECT_ID ('LOG_ucMotEgr' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_ucMotEgr ON ucMotEgr   /* File Nº: 414 */

  IF OBJECT_ID ('LOG_ucConLiq' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_ucConLiq ON ucConLiq   /* File Nº: 415 */

  IF OBJECT_ID ('LOG_xmUsuVen' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_xmUsuVen ON xmUsuVen   /* File Nº: 416 */

  IF OBJECT_ID ('LOG_ucLugPag' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_ucLugPag ON ucLugPag   /* File Nº: 417 */

  IF OBJECT_ID ('LOG_ucMatCab' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_ucMatCab ON ucMatCab   /* File Nº: 418 */

  IF OBJECT_ID ('LOG_ucLocalidad' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_ucLocalidad ON ucLocalidad   /* File Nº: 419 */

  IF OBJECT_ID ('LOG_xmLogTrig' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_xmLogTrig ON xmLogTrig   /* File Nº: 420 */

  IF OBJECT_ID ('LOG_xmPadronCont' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_xmPadronCont ON xmPadronCont   /* File Nº: 421 */

  IF OBJECT_ID ('LOG_ucMatDet' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_ucMatDet ON ucMatDet   /* File Nº: 422 */

  IF OBJECT_ID ('LOG_ucRelLab' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_ucRelLab ON ucRelLab   /* File Nº: 423 */

  IF OBJECT_ID ('LOG_ucParent' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_ucParent ON ucParent   /* File Nº: 424 */

  IF OBJECT_ID ('LOG_ucEscola' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_ucEscola ON ucEscola   /* File Nº: 425 */

  IF OBJECT_ID ('LOG_ucEstCiv' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_ucEstCiv ON ucEstCiv   /* File Nº: 426 */

  IF OBJECT_ID ('LOG_ucSindic' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_ucSindic ON ucSindic   /* File Nº: 427 */

  IF OBJECT_ID ('LOG_ucSeccio' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_ucSeccio ON ucSeccio   /* File Nº: 428 */

  IF OBJECT_ID ('LOG_umLegHSa' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_umLegHSa ON umLegHSa   /* File Nº: 429 */

  IF OBJECT_ID ('LOG_umLegRVa' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_umLegRVa ON umLegRVa   /* File Nº: 430 */

  IF OBJECT_ID ('LOG_umLegHPEn' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_umLegHPEn ON umLegHPEn   /* File Nº: 431 */

  IF OBJECT_ID ('LOG_umLegHPEs' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_umLegHPEs ON umLegHPEs   /* File Nº: 432 */

  IF OBJECT_ID ('LOG_umLegHEm' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_umLegHEm ON umLegHEm   /* File Nº: 433 */

  IF OBJECT_ID ('LOG_umLegVal' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_umLegVal ON umLegVal   /* File Nº: 434 */

  IF OBJECT_ID ('LOG_umLegFam' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_umLegFam ON umLegFam   /* File Nº: 435 */

  IF OBJECT_ID ('LOG_umLiquid' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_umLiquid ON umLiquid   /* File Nº: 436 */

  IF OBJECT_ID ('LOG_ugPerConsul' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_ugPerConsul ON ugPerConsul   /* File Nº: 437 */

  IF OBJECT_ID ('LOG_umLiqLeD' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_umLiqLeD ON umLiqLeD   /* File Nº: 438 */

  IF OBJECT_ID ('LOG_umLiqLeC' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_umLiqLeC ON umLiqLeC   /* File Nº: 439 */

  IF OBJECT_ID ('LOG_umConLeg' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_umConLeg ON umConLeg   /* File Nº: 440 */

  IF OBJECT_ID ('LOG_utParSue' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_utParSue ON utParSue   /* File Nº: 441 */

  IF OBJECT_ID ('LOG_zmMovCaR' , 'TR') <> 0
      ENABLE TRIGGER dbo.LOG_zmMovCaR ON zmMovCaR   /* File Nº: 442 */


END

GO
/****** Object:  StoredProcedure [dbo].[proc_pivotEnviosCobranza]    Script Date: 19/01/2020 16:51:06 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE procedure [dbo].[proc_pivotEnviosCobranza]
( @CuentaContable Varchar(20)  = null, @FechaDesde varchar(20) = null , @ConceptosNoIncluidos varchar(800) = null,@CuentaCaja Varchar(100) = null)
as
DECLARE
    @columns NVARCHAR(MAX) = '',
    @sql     NVARCHAR(MAX) = '';
 
SELECT   @columns+=QUOTENAME(periodo) + ','
FROM     (SELECT DISTINCT periodo 
          FROM F_EnviosCobranza(null,@FechaDesde,null,null)) l
ORDER BY periodo;
 
-- remove the last comma
SET @columns = LEFT(@columns, LEN(@columns) - 1);
 
-- construct dynamic SQL
SET @sql ='
SELECT * FROM  
(
    SELECT
        cuentaCaja [Cuenta de Caja],
        descripción [Descripción],
		periodo [Periodo],
		round(coalesce(importe,0),0) [Importe]
    FROM
        F_EnviosCobranza(@1,''@2'',@3,@4) p
) t
PIVOT(
    sum(importe)
    FOR periodo IN ('+ @columns +')
) AS pivot_table;';

set @sql =replace(@sql,'@1','null')
set @sql =replace(@sql,'@2',@FechaDesde)
set @sql =replace(@sql,'@3','null')
set @sql =replace(@sql,'@4','null')
 
-- execute the dynamic SQL
EXECUTE sp_executesql @sql;

GO
/****** Object:  StoredProcedure [dbo].[proc_pivotGastos]    Script Date: 19/01/2020 16:51:06 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE procedure [dbo].[proc_pivotGastos]
( @CuentaContable Varchar(20)  = null, @FechaDesde varchar(20) = null , @ConceptosNoIncluidos varchar(800) = null,@CuentaCaja Varchar(100) = null)
as
DECLARE
    @columns NVARCHAR(MAX) = '',
    @sql     NVARCHAR(MAX) = '';
 
-- select the category names
SELECT 
    @columns+=
	QUOTENAME(periodo) + ','
--select *  
FROM (select distinct periodo 
      from F_GastosConcepto2(null,@FechaDesde,null,null)) l
ORDER BY
    periodo;
 
-- remove the last comma
SET @columns = LEFT(@columns, LEN(@columns) - 1);
 
-- construct dynamic SQL
SET @sql ='
SELECT * FROM  
(
    SELECT
        cuentacontable [Cuenta Contable],
        codconfac [Codigo Concepto],
        descripción [Descripción],
		periodo [Periodo],
		round(coalesce(importe,0),0) [Importe],
		Origen,
		Tipo
    FROM
        F_GastosConcepto2(@1,''@2'',@3,@4) p
) t
PIVOT(
    sum(importe)
    FOR periodo IN ('+ @columns +')
) AS pivot_table;';

set @sql =replace(@sql,'@1','null')
set @sql =replace(@sql,'@2',@FechaDesde)
set @sql =replace(@sql,'@3','null')
set @sql =replace(@sql,'@4','null')
 
-- execute the dynamic SQL
EXECUTE sp_executesql @sql;

GO
/****** Object:  StoredProcedure [dbo].[proc_pivotIngresos]    Script Date: 19/01/2020 16:51:06 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE procedure [dbo].[proc_pivotIngresos]
( @CuentaContable Varchar(20)  = null, @FechaDesde varchar(20) = null , @ConceptosNoIncluidos varchar(800) = null,@CuentaCaja Varchar(100) = null)
as
DECLARE
    @columns NVARCHAR(MAX) = '',
    @sql     NVARCHAR(MAX) = '';
 
SELECT   @columns+=QUOTENAME(periodo) + ','
FROM     (SELECT DISTINCT periodo 
          FROM F_IngresosConcepto(null,@FechaDesde,null,null)) l
ORDER BY periodo;
 
-- remove the last comma
SET @columns = LEFT(@columns, LEN(@columns) - 1);
 
-- construct dynamic SQL
SET @sql ='
SELECT * FROM  
(
    SELECT
        cuentaCaja [Cuenta de Caja],
        descripción [Descripción],
		periodo [Periodo],
		round(coalesce(importe,0),0) [Importe]
    FROM
        F_IngresosConcepto(@1,''@2'',@3,@4) p
) t
PIVOT(
    sum(importe)
    FOR periodo IN ('+ @columns +')
) AS pivot_table;';

set @sql =replace(@sql,'@1','null')
set @sql =replace(@sql,'@2',@FechaDesde)
set @sql =replace(@sql,'@3','null')
set @sql =replace(@sql,'@4','null')
 
-- execute the dynamic SQL
EXECUTE sp_executesql @sql;

GO
/****** Object:  StoredProcedure [dbo].[ServBorrados]    Script Date: 19/01/2020 16:51:06 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO






-- =============================================
-- Author:		<Joaquin Ravanelli>
-- Create date: <19 06 2006>
-- Description:	<RECONSTRUYE SERVICIOS BORRADOS EN UNA NUEVA TABLA>
-- =============================================
CREATE PROCEDURE [dbo].[ServBorrados]
AS
BEGIN
	SET NOCOUNT ON;
   DECLARE @Contador INT
   DECLARE @Cantidad INT
   DECLARE @Insert_Campos VARCHAR(800)
   DECLARE @Insert_Valores VARCHAR(800)
   DECLARE @Fecha DATETIME
   
   SET @Contador = 0
   
   DECLARE Borrados CURSOR FOR 
    SELECT TOP 10000 Insert_Campos,Insert_Valores,Fecha-- REPLACE(Insert_Valores,'''','''''')--DISTINCT ValorClave1, CONVERT(VARCHAR(6),PLANEON_Log.dbo.LogRegistros.Fecha,112),vcConFac.CodRubro
      FROM PLANEON_Log.dbo.LogRegistros
      JOIN vcConFac ON PLANEON_Log.dbo.LogRegistros.ValorClave2 = vcConFac.CodConFac
     WHERE Tabla = 'vcCliDebAuto'
       AND ACCION = 'DELETE'
	   AND Insert_Valores NOT IN (SELECT AUX.Insert_Valores
                                    FROM PLANEON_Log.dbo.LogRegistros aux
                                   WHERE AUX.Tabla = 'vcCliDebAuto'
								     AND AUX.Fecha = PLANEON_Log.dbo.LogRegistros.Fecha
                                     AND ACCION = 'INSERT')
       AND CONVERT(VARCHAR(6),PLANEON_Log.dbo.LogRegistros.Fecha,112) >= CONVERT(VARCHAR(6),DATEADD(MM,-2,GETDATE()),112)
	   AND ValorClave1 + ValorClave2 + ValorClave3 NOT IN (SELECT CONVERT(VARCHAR,CodCliente) + CONVERT(VARCHAR,CodConFac) + CONVERT(VARCHAR,DocNumero) FROM vcCliDebAuto_Deleted);
      

    SET @Cantidad = 
   (SELECT COUNT(1)
      FROM PLANEON_Log.dbo.LogRegistros
      JOIN vcConFac ON PLANEON_Log.dbo.LogRegistros.ValorClave2 = vcConFac.CodConFac
     WHERE Tabla = 'vcCliDebAuto'
       AND ACCION = 'DELETE'
	   AND Insert_Valores NOT IN (SELECT AUX.Insert_Valores
                                    FROM PLANEON_Log.dbo.LogRegistros aux
                                   WHERE AUX.Tabla = 'vcCliDebAuto'
								     AND AUX.Fecha = PLANEON_Log.dbo.LogRegistros.Fecha
                                     AND ACCION = 'INSERT')
       AND CONVERT(VARCHAR(6),PLANEON_Log.dbo.LogRegistros.Fecha,112) >= CONVERT(VARCHAR(6),DATEADD(MM,-2,GETDATE()),112));

    SET @Contador = 1
    OPEN Borrados
    FETCH NEXT FROM Borrados INTO @Insert_Campos, @Insert_Valores,@Fecha

    WHILE @Contador < @Cantidad
    BEGIN

        EXEC('INSERT INTO [vcCliDebAuto_Deleted] (' + @Insert_Campos  + ',FecBorrado) 
		                                  VALUES (' + @Insert_Valores + ',''' + @Fecha + ''')')
        PRINT @CONTADOR
        SET @Contador = @Contador + 1
        FETCH NEXT FROM Borrados INTO @Insert_Campos, @Insert_Valores,@Fecha
    END

    CLOSE Borrados
    DEALLOCATE Borrados


END








GO
/****** Object:  StoredProcedure [dbo].[sp_CantCampInd]    Script Date: 19/01/2020 16:51:06 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO




-- =============================================
-- Author:		<Joaquin Ravanelli>
-- Create date: <19 06 2006>
-- Description:	<Retorna la cantidad de campos de un Índice>
-- =============================================
CREATE PROCEDURE [dbo].[sp_CantCampInd]
	@Par_IndiceName	 varchar(30)
AS
BEGIN
	SET NOCOUNT ON;

	DECLARE @IdIndice         DECIMAL(15,0)
	DECLARE @IdIndiceInterno  DECIMAL(15,0)
	DECLARE @CantCamposIndice DECIMAL(15,0)
	SET @IdIndice          = (SELECT id    FROM SysIndexes WHERE "name" = @Par_IndiceName )
	SET @IdIndiceInterno   = (SELECT indid FROM SysIndexes WHERE "name" = @Par_IndiceName )
	SET @CantCamposIndice  = (SELECT COUNT(*) FROM sysindexkeys WHERE id = @IdIndice AND indid = @IdIndiceInterno )

END

RETURN @CantCamposIndice





GO
/****** Object:  StoredProcedure [dbo].[SP_GastosConcepto]    Script Date: 19/01/2020 16:51:06 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
--exec SP_GastosConcepto

CREATE PROCEDURE  [dbo].[SP_GastosConcepto]
(@CuentaContable Varchar(20) = '2301', @FechaDesde varchar(20) = '01/01/2018', @ConceptosNoIncluidos varchar(800) = null,@CuentaCaja Varchar(100) = null)
AS
	declare @Descripcion varchar(200)
    declare @gastos table(importe float,periodo int, cuentacontable varchar(20), Descripción varchar(80))
    --declare @gastos table(importe float,periodo int, cuentacontable varchar(20), cuentacaja varchar(20))
	declare cur_sor cursor
	for
		SELECT CONVERT(VARCHAR,ocPlaCue.CodCuenta),DesLArga
		  FROM ocPlacue --ON ocPlacue.CodCuenta = cmComCon.CodCuenta 
	     WHERE (LEFT(VisNivPad,2) = '05' 
		    OR LEFT(VisNivPad,8) = '02.01.03'
		    OR LEFT(VisNivPad,8) = '02.01.04' 
		    OR LEFT(VisNivPad,8) = '01.01.04') 
		
		
		open cur_sor
        
        FETCH NEXT FROM cur_sor into @CuentaContable,@Descripcion
        WHILE @@FETCH_STATUS = 0  
		BEGIN
		    insert into @gastos
			SELECT SUM( GASTO), PERIODO, @CuentaContable,@Descripcion
			FROM (
			 (SELECT SUM(COALESCE(coalesce(cmRefCom.Creimporte, fmMovCaD.ImpHaber) * CASE WHEN fcCueCaj.CodCtaCaja IS NULL THEN 0 ELSE 1 END,0)) Gasto, 
			  MONTH(xgPeriodos.Dia)Periodo--CONVERT(VARCHAR(6),xgPeriodos.Dia,112) Periodo
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
			  LEFT JOIN  (SELECT  cmComCon.SubFinal,cmComCon.IdCompro,cmcomcon.CodCuenta
							FROM cmComCon
							JOIN ocPlacue ON ocPlacue.CodCuenta = cmComCon.CodCuenta 
							 AND (LEFT(VisNivPad,2) = '05' 
					   OR LEFT(VisNivPad,8) = '02.01.03'
							  OR LEFT(VisNivPad,8) = '02.01.04' 
							  OR LEFT(VisNivPad,8) = '01.01.04') 
							 AND cmComCon.CodCuenta = @CuentaContable) AS T2 ON T2.IdCompro = cmComCab.IdCompro 
			  LEFT JOIN ccDefCom ON cmComCab.CodComComp = ccDefCom.CodDefCom AND ccDefCom.AfeCtaCte = 'Si' 
			  LEFT JOIN cmRefCom ON cmRefCom.CreIdCompro = cmComCab.IdCompro 
			  LEFT JOIN fmMovCaD ON ( --fmMovCaD.IdCompro = cmComCab.IdCompro OR
									  COALESCE(cmRefCom.DebIdCompro,cmComCab.IdCompro) = fmMovCaD.IdCompro) AND fmMovCad.DebeHaber = 'Haber'
			  LEFT JOIN fcCueCaj ON fcCueCaj.CodCtaCaja = fmMovCaD.CodCtaCaja 
			 WHERE TipoPeriodo = 'Dia'  AND cmComCab.CodComComp NOT IN ('FIO','FIS')
			   AND CONVERT(VARCHAR(6),xgPeriodos.Dia,112) BETWEEN CONVERT(VARCHAR(6),DATEADD(MM, 0,@FechaDesde),112)
															  AND CONVERT(VARCHAR(6),DATEADD(MM,11,@FechaDesde),112)
			 GROUP BY MONTH(xgPeriodos.Dia))--CONVERT(VARCHAR(6),xgPeriodos.Dia,112)) 
			 UNION 
			 (SELECT SUM(COALESCE(fmMovCaD.ImpDebe,0)) Gasto, 
			  MONTH(xgPeriodos.Dia)Periodo--CONVERT(VARCHAR(6),xgPeriodos.Dia,112) Periodo 
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
			 WHERE TipoPeriodo = 'Dia' 
			   AND CONVERT(VARCHAR(6),xgPeriodos.Dia,112) BETWEEN CONVERT(VARCHAR(6),DATEADD(MM, 0,@FechaDesde),112)
															  AND CONVERT(VARCHAR(6),DATEADD(MM,11,@FechaDesde),112)
			 GROUP BY MONTH(xgPeriodos.Dia)))T1--CONVERT(VARCHAR(6),xgPeriodos.Dia,112))) T1 
			 GROUP BY Periodo ORDER BY PERIODO
			 
			 FETCH NEXT FROM cur_sor into @CuentaContable, @Descripcion
		END   
		CLOSE CUR_SOR;  
		DEALLOCATE CUR_SOR;
		
	select *--importe,periodo
	from @gastos
	pivot (sum(importe)for periodo in ([1],[2],[3],[4],[5],[6],[7],[8],[9],[10],[11],[12])) as t2
	order by CONVERT(INT,cuentacontable)
GO
/****** Object:  StoredProcedure [dbo].[sp_GrabaArchivo]    Script Date: 19/01/2020 16:51:06 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO






-- =============================================
-- Author:		<Joaquin Ravanelli>
-- Create date: <19 06 2006>
-- Description:	<Retorna la cantidad de campos de un Índice>
-- =============================================
CREATE PROCEDURE [dbo].[sp_GrabaArchivo]
	@Par_IndiceName	 varchar(30),
	@Par_Tabla	     varchar(50)
AS
BEGIN
	SET NOCOUNT ON;

				DECLARE @CONTADOR AS BIGINT
				DECLARE @CURSOR AS BIGINT
				DECLARE @VARIABLE AS VARCHAR (179)
				
		IF(SELECT OBJECT_ID('tempdb.dbo.##AUX1') ) IS NOT NULL
	     DROP TABLE ##AUX1
				
				
				EXEC('
				 SELECT (ROW_NUMBER() OVER(ORDER BY IDREGISTRON,IDREGISTROC))  AS FILA
						,COLUMNA01 + COLUMNA02 + COLUMNA03 AS REGISTRO
				   INTO ##AUX1
				   FROM   ' + @Par_Tabla + ' 
				   ORDER BY IDREGISTRON,IDREGISTROC')

				SET @CONTADOR = (SELECT MAX(FILA) FROM ##AUX1)
               -- PRINT (@CONTADOR)
				SET @CURSOR = 1
				SET	@VARIABLE = (SELECT REGISTRO
									   FROM ##AUX1
									  WHERE FILA = @CURSOR)
				    
					EXEC('
										  EXEC master..xp_cmdshell  '' ECHO ' + @VARIABLE + '> c:exerclass\DebitoA\'+ @Par_IndiceName +'.txt'', no_output
									   ' )
				   					   
				   SET @CURSOR = @CURSOR + 1                    
				WHILE  @CURSOR <= @CONTADOR
				BEGIN
					SET	@VARIABLE = (SELECT REGISTRO
									   FROM ##AUX1
									  WHERE FILA = @CURSOR)
				    
					EXEC('
										  EXEC master..xp_cmdshell  '' ECHO ' + @VARIABLE + '>> c:\exerclass\DebitoA\'+ @Par_IndiceName +'.txt'', no_output
									   ' )
				
					SET @CURSOR = @CURSOR + 1
					--PRINT (@CURSOR)
				CONTINUE
				END
SET @CURSOR = @CURSOR / 90
--EXEC('WAITFOR DELAY ''00:00:' + @CURSOR  + '''')
--EXEC('DROP TABLE ' + @Par_Tabla)

DROP TABLE ##AUX1


END








GO
/****** Object:  StoredProcedure [dbo].[updateClientPrices]    Script Date: 19/01/2020 16:51:06 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE procedure [dbo].[updateClientPrices]

        @CodRubro INT,
        @CodSubRub INT,
        @CodTipConcepto INT,
        @CodConFac INT,
		@Redondeo INT,
        @Limite INT,
		@Vigencia datetime,
		@Excluir varchar(800),
		@ClienteDesde INT,
        @ClienteHasta INT
AS

 
 update vccda
       
  set  vccda.ValorUni =
	   CASE WHEN (vcConFac.PreUnitario - (d.PorcDescuento / 100 * vcConFac.PreUnitario))   % @Redondeo < @Limite THEN
                 (vcConFac.PreUnitario - (d.PorcDescuento / 100 * vcConFac.PreUnitario)) - ((vcConFac.PreUnitario - (d.PorcDescuento / 100 * vcConFac.PreUnitario)) % @Redondeo)
            ELSE 
                 (vcConFac.PreUnitario - (d.PorcDescuento / 100 * vcConFac.PreUnitario)) + (@Redondeo- ((vcConFac.PreUnitario - (d.PorcDescuento / 100 * vcConFac.PreUnitario)) % @Redondeo))
            END  

  FROM vcCliDebAuto vccda
  JOIN vcConFac ON vccda.CodConFac = vcConFac.CodConFac
  JOIN vcClient ON vccda.CodCliente = vcClient.CodCliente
  JOIN xgDocDGI ON vcClient.TipDocume = xgDocDGI.CodDocDGI
  JOIN vcVended ON vcClient.CodCobrador = vcVended.CodVended
  JOIN DescuentoAntiguedadConceptos d on datediff(MM,vccda.PeriodoInicio,getdate()) >= d.AntiguedadDesde * 12 and 
                                             d.AntiguedadDesde * 12 < datediff(MM,vccda.PeriodoInicio,getdate())
  WHERE (vcConFac.CodRubro = CONVERT(INT,@CodRubro) OR  CONVERT(INT,@CodRubro)=0)
	AND (vcConFac.CodSubRub = @CodSubRub  or @CodSubRub = 0)
    AND vccda.CodCliente BETWEEN @ClienteDesde AND  @ClienteHasta
    AND vccda.PeriodoInicio <= @Vigencia
    AND vcClient.CueBloque <> 'Si'
    AND vcClient.CueInhabi <> 'Si'
    AND vcClient.TipEventu <> 1
    AND vccda.ValorUni > 0
    AND ((SELECT COUNT(1) FROM vcCliDebAuto vcCDA2 WHERE vcCDA2.CodCliente =vccda.CodCliente AND vcCDA2.PeriodoInicio > @Vigencia) = 0 )
	AND  '(' + replace(@Excluir,',',')()' + ')') not like '%(' + convert(varchar,vcclient.CodCliente)  + ')%'


	SELECT 
       '('+convert( varchar,vcClient.CodCliente)+') '+ vcClient.RazSocial + ' ' + RTRIM(xgDocDGI.DesDocume) + ': ' + vcClient.NumDocume Cliente,
       convert(varchar,vcConFac.CodConFac) + ' - ' +  vcConFac.Concepto Concepto,
       vcCliDebAuto.ValorUni [Valor actual],

	   CASE WHEN (vcConFac.PreUnitario - (d.PorcDescuento / 100 * vcConFac.PreUnitario))   % @Redondeo < @Limite THEN
                 (vcConFac.PreUnitario - (d.PorcDescuento / 100 * vcConFac.PreUnitario)) - ((vcConFac.PreUnitario - (d.PorcDescuento / 100 * vcConFac.PreUnitario)) % @Redondeo)
            ELSE 
                 (vcConFac.PreUnitario - (d.PorcDescuento / 100 * vcConFac.PreUnitario)) + (@Redondeo- ((vcConFac.PreUnitario - (d.PorcDescuento / 100 * vcConFac.PreUnitario)) % @Redondeo))
            END  [Valor Calculado],
		
	   vcCliDebAuto.ValorUni -
	   CASE WHEN (vcConFac.PreUnitario - (d.PorcDescuento / 100 * vcConFac.PreUnitario))   % @Redondeo < @Limite THEN
                 (vcConFac.PreUnitario - (d.PorcDescuento / 100 * vcConFac.PreUnitario)) - ((vcConFac.PreUnitario - (d.PorcDescuento / 100 * vcConFac.PreUnitario)) % @Redondeo)
            ELSE 
                 (vcConFac.PreUnitario - (d.PorcDescuento / 100 * vcConFac.PreUnitario)) + (@Redondeo- ((vcConFac.PreUnitario - (d.PorcDescuento / 100 * vcConFac.PreUnitario)) % @Redondeo))
            END  [Diferencia]

  FROM vcCliDebAuto
  JOIN vcConFac ON vcCliDebAuto.CodConFac = vcConFac.CodConFac
  JOIN vcClient ON vcCliDebAuto.CodCliente = vcClient.CodCliente
  JOIN xgDocDGI ON vcClient.TipDocume = xgDocDGI.CodDocDGI
  JOIN vcVended ON vcClient.CodCobrador = vcVended.CodVended
  JOIN DescuentoAntiguedadConceptos d on datediff(MM,vcCliDebAuto.PeriodoInicio,getdate()) >= d.AntiguedadDesde * 12 and 
                                             d.AntiguedadDesde * 12 < datediff(MM,vcCliDebAuto.PeriodoInicio,getdate())
  WHERE (vcConFac.CodRubro = CONVERT(INT,@CodRubro) OR  CONVERT(INT,@CodRubro)=0)
	AND (vcConFac.CodSubRub = @CodSubRub  or @CodSubRub = 0)
    AND vcCliDebAuto.CodCliente BETWEEN @ClienteDesde AND  @ClienteHasta
    AND vcCliDebAuto.PeriodoInicio <= @Vigencia
    AND vcClient.CueBloque <> 'Si'
    AND vcClient.CueInhabi <> 'Si'
    AND vcClient.TipEventu <> 1
    AND vcCliDebAuto.ValorUni > 0
    AND ((SELECT COUNT(1) FROM vcCliDebAuto vcCDA WHERE vcCDA.CodCliente =vcCliDebAuto.CodCliente AND vcCDA.PeriodoInicio > @Vigencia) = 0 )
	AND  '(' + replace(@Excluir,',',')()' + ')') not like '%(' + convert(varchar,vcclient.CodCliente)  + ')%'
  ORDER BY 5 DESC


GO
/****** Object:  StoredProcedure [dbo].[UpdatePricesConcepts]    Script Date: 19/01/2020 16:51:06 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[UpdatePricesConcepts]
@CodRubro int
AS
BEGIN
	SET NOCOUNT ON;
            
			
			SELECT xgtc.CodTipConcepto, xgtc.DesConcepto, sum(dp.Importe) TotalPlan, sum(dp.Importe)*0.011 CostoPlan into ##CostoPlan
			FROM xgTipCon xgtc
			join tipoConceptoRubro tcr on tcr.CodTipConcepto = xgtc.CodTipConcepto
			left join Prestacion p on p.CodTipConcepto = xgtc.CodTipConcepto
			left join DetPrestacion dp on dp.PrestacionID = p.PrestacionID
			where tcr.CodRubro = @CodRubro
			group by xgtc.CodTipConcepto, xgtc.DesConcepto

			select 
				   sc.*  into ##calculoConcepto
			from CalculoPorTipo_SubRubro sc
			join scSubRub sr on sc.CodSubRub =  sr.CodSubRub
			order by 1 desc

			update c
			set Formula = replace(c.Formula,'#CP', convert(varchar,cp.CostoPlan))
			from ##calculoConcepto c
			join ##CostoPlan cp on cp.CodTipConcepto = c.CodTipConcepto


			while exists (select * 
							from ##calculoConcepto c 
						   where formula like '%#%' and Formula not like '%' + Alias + '%' 
							 and exists(select top 1 cc.alias from ##calculoConcepto cc where c.Formula like '%' + cc.Alias + '%' and cc.Formula not like '%#%' and len( cc.formula) > 0))
			begin

				update c
				set formula = replace(formula,(select top 1 cc.alias from ##calculoConcepto cc where c.Formula like '%' + cc.Alias + '%' and cc.Formula not like '%#%' and len( cc.formula) > 0),(select top 1 cc.Formula from ##calculoConcepto cc where c.Formula like '%' + cc.Alias + '%' and cc.Formula not like '%#%' and len( cc.formula) > 0))
				from ##calculoConcepto c 
				where formula like '%#%' and Formula not like '%' + Alias + '%' 
				and exists(select top 1 cc.alias from ##calculoConcepto cc where c.Formula like '%' + cc.Alias + '%' and cc.Formula not like '%#%' and len( cc.formula) > 0)

			end

			

					declare @formula nvarchar(800), @subRub int, @codTipConcepto int, @sql2 nvarchar(800)

					declare calculo cursor for
					select c.CodSubRub,c.CodTipConcepto,c.Formula
					from ##calculoConcepto c
					where c.Formula not like '%#%'
		
					open calculo

					fetch next from calculo into @subRub, @codTipConcepto, @formula
					WHILE @@FETCH_STATUS = 0
					BEGIN
						set @sql2 = 'update ##calculoConcepto set Importe = ' + @formula + ' where CodTipConcepto = ' + convert(varchar,@codTipConcepto) + ' and CodSubRub = ' + convert(varchar,@subRub)
						EXECUTE sp_executesql @sql2
			
						fetch next from calculo into @subRub, @codTipConcepto, @formula
					END
					close calculo
					deallocate calculo

					
					update vccf
					set vccf.PreUnitario = round(c.Importe,0)
					from vcConFac vccf
					join ##calculoConcepto c on vccf.CodConFac = c.CodConFac
					where c.Formula not like '%#%'
					and len(Formula) > 0


			drop table ##CostoPlan
			drop table ##calculoConcepto

end

GO
/****** Object:  StoredProcedure [dbo].[UpdatePricesConcets]    Script Date: 19/01/2020 16:51:06 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[UpdatePricesConcets]
AS
BEGIN
	SET NOCOUNT ON;
            
			
			SELECT xgtc.CodTipConcepto, xgtc.DesConcepto, sum(dp.Importe) TotalPlan, sum(dp.Importe)*0.011 CostoPlan into ##CostoPlan
			FROM xgTipCon xgtc
			left join Prestacion p on p.CodTipConcepto = xgtc.CodTipConcepto
			left join DetPrestacion dp on dp.PrestacionID = p.PrestacionID
			group by xgtc.CodTipConcepto, xgtc.DesConcepto

			select 
				   *  into ##calculoConcepto
			from CalculoPorTipo_SubRubro sc
			order by 1 desc

			update c
			set Formula = replace(c.Formula,'#CP', convert(varchar,cp.CostoPlan))
			from ##calculoConcepto c
			join ##CostoPlan cp on cp.CodTipConcepto = c.CodTipConcepto


			while exists (select * 
							from ##calculoConcepto c 
						   where formula like '%#%' and Formula not like '%' + Alias + '%' 
							 and exists(select top 1 cc.alias from ##calculoConcepto cc where c.Formula like '%' + cc.Alias + '%' and cc.Formula not like '%#%' and len( cc.formula) > 0))
			begin

				update c
				set formula = replace(formula,(select top 1 cc.alias from ##calculoConcepto cc where c.Formula like '%' + cc.Alias + '%' and cc.Formula not like '%#%' and len( cc.formula) > 0),(select top 1 cc.Formula from ##calculoConcepto cc where c.Formula like '%' + cc.Alias + '%' and cc.Formula not like '%#%' and len( cc.formula) > 0))
				from ##calculoConcepto c 
				where formula like '%#%' and Formula not like '%' + Alias + '%' 
				and exists(select top 1 cc.alias from ##calculoConcepto cc where c.Formula like '%' + cc.Alias + '%' and cc.Formula not like '%#%' and len( cc.formula) > 0)

			end

			

					declare @formula nvarchar(800), @subRub int, @codTipConcepto int, @sql2 nvarchar(800)

					declare calculo cursor for
					select c.CodSubRub,c.CodTipConcepto,c.Formula
					from ##calculoConcepto c
					where c.Formula not like '%#%'
		
					open calculo

					fetch next from calculo into @subRub, @codTipConcepto, @formula
					WHILE @@FETCH_STATUS = 0
					BEGIN
						set @sql2 = 'update ##calculoConcepto set Importe = ' + @formula + ' where CodTipConcepto = ' + convert(varchar,@codTipConcepto) + ' and CodSubRub = ' + convert(varchar,@subRub)
						EXECUTE sp_executesql @sql2
			
						fetch next from calculo into @subRub, @codTipConcepto, @formula
					END
					close calculo
					deallocate calculo

					
					update vccf
					set vccf.PreUnitario = c.Importe
					from vcConFac vccf
					join ##calculoConcepto c on vccf.CodConFac = c.CodConFac
					where c.Formula not like '%#%'
					and len(Formula) > 0


			drop table ##CostoPlan
			drop table ##calculoConcepto

end

GO
/****** Object:  StoredProcedure [dbo].[UserWebInsertOrUdate]    Script Date: 19/01/2020 16:51:06 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Author,,Mauricio Cárcamo>
-- Create date: <Create Date,2019/11/24,>
-- Description:	<Description,Método para insert o update de tabla userWeb,>
-- =============================================
CREATE PROCEDURE [dbo].[UserWebInsertOrUdate]
	@ID int, @userName varchar(20), @password varchar(500), @name varchar(200), @lastName varchar(200), @userEmail varchar(200), @estado bit
AS
BEGIN
declare @User_ID int;
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

    if @ID = 0 
	begin
		if exists(select * from UserWeb uw where uw.UsuLogin = @userName)
		raiserror('Usuario Existente',16,2)

		set @User_ID = coalesce((select max(u.IdRegistro) from UserWeb u),0) +1
		INSERT INTO [dbo].[UserWeb]
           ([IdRegistro]
           ,[UsuLogin]
           ,[Estado]
           ,[DesUsuario]
           ,[NomFantasia]
           ,[Password]
           ,[TipoCuenta]
           ,[CodCliente]
           ,[CodProveedor]
           ,[CodVended]
           ,[CodActivacion]
           ,[DirMail])
		VALUES
           (@User_ID
           ,@userName
           ,@estado
           ,@name
           ,@lastName
           ,@password
           ,''
           ,0
           ,0
           ,0
           ,''
           ,@userEmail)
	end
	else
	begin
		set @User_ID = @ID
		update UserWeb 
		set UsuLogin = @userName,
			Estado = @estado,
			DesUsuario = @name,
			NomFantasia = @lastName,
			[Password] = @password,
			DirMail = @userEmail
		where IdRegistro = @User_ID
	end
	select @User_ID as ID
END

GO
