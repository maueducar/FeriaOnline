select * from plancomision

USE [OMSA]
GO
/****** Object:  StoredProcedure [dbo].[InsertOrUpdatePlanComision]    Script Date: 18/06/2020 22:09:28 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

ALTER PROCEDURE [dbo].[InsertOrUpdatePlanComision]
@PlanComisionID INT, @PlanDescripcion VARCHAR(50), @PlanTipoCalculo INT, @CalculoSubordinados BIT, @PlanComisionBaja BIT, 
@PlanComisionDetalleID INT, @MontoDesde FLOAT, @MontoHasta FLOAT, @MontoPremio FLOAT, @PorcentajePremio FLOAT, @DetalleBaja bit, @Identity varchar(50) 
AS 
BEGIN
	--BEGIN TRY 
			--BEGIN TRAN
				SET @PlanComisionID = COALESCE((SELECT PlanComisionID FROM PlanComision WHERE [Identity] = @Identity ),0)
				
				IF @PlanComisionID = 0
				BEGIN
					INSERT INTO PlanComision
					VALUES(@PlanDescripcion,@PlanTipoCalculo,@CalculoSUbordinados,@PlanComisionBaja,@Identity)
					SET @PlanComisionID = scope_identity()
					INSERT INTO PlanComisionDetalle
					VALUES(@PlanComisionID,@MontoDesde,@MontoHasta,@MontoPremio,@PorcentajePremio,@DetalleBaja)
					SET @PlanComisionDetalleID = scope_identity()
				END
				ELSE
				BEGIN
					
					IF coalesce(@PlanComisionDetalleID,0) = 0
					BEGIN
						--select @PlanComisionID a,@MontoDesde b,@MontoHasta c,@MontoPremio d,@PorcentajePremio e,@DetalleBaja f into prueba
						INSERT INTO PlanComisionDetalle
						VALUES(@PlanComisionID,@MontoDesde,@MontoHasta,@MontoPremio,@PorcentajePremio,@DetalleBaja)
						--SET @PlanComisionDetalleID = scope_identity()
					END
					ELSE
					BEGIN
						UPDATE PlanComisionDetalle
						SET MontoDesde = @MontoDesde,MontoHasta = @MontoHasta,MontoPremio = @MontoPremio, PorcentajePremio = @PorcentajePremio,DetalleBaja = @DetalleBaja
						WHERE PlanComisionDetalleID = @PlanComisionDetalleID

						--select @MontoDesde md,@MontoHasta mh,@MontoPremio mp, @PorcentajePremio p,@DetalleBaja db ,@PlanComisionDetalleID pd into prueba
					END
				END

				SELECT @PlanComisionID PlanComisionID, @PlanDescripcion PlanDescripcion, @PlanTipoCalculo PlanTipoCalculo, @CalculoSubordinados CalculoSubordinados, @PlanComisionBaja PlanComisionBaja, 
				@PlanComisionDetalleID PlanComisionDetalleID, @MontoDesde MontoDesde, @MontoHasta MontoHasta, @MontoPremio MontoPremio, @PorcentajePremio PorcentajePremio, @DetalleBaja DetalleBaja
			--COMMIT
	--END TRY
	--BEGIN CATCH
		
	--	ROLLBACK
	--END CATCH

END

select * from prueba
drop table prueba

select * from PlanComisionDetalle
delete PlanComisionDetalle

alter PROCEDURE GetPlanesComisionDetalle
@PlanComisionID int, @Identity varchar(50)
AS 
BEGIN
	BEGIN TRY 
			BEGIN TRAN
				SELECT * 
				FROM PlanComisionDetalle P
				WHERE PlanComisionID = @PlanComisionID 
				AND coalesce(P.DetalleBaja,0) = 0
			COMMIT
	END TRY
	BEGIN CATCH
		ROLLBACK
	END CATCH
END

select * 
from PlanComision

select * from plancomisionvendedor

alter procedure getPlanComisionVendedor
@PlanComisionID int
as
begin
	select 
		 cv.CodVended, cv.NomVended, row_number() over(order by pcv.PlanComisionVendedorID) position,
		 case when pc.PlanComisionID is null then 0 else 1 end [select] 
	from planComision pc
	join plancomisionvendedor pcv on pc.PlanComisionID = pcv.PlanComisionID and coalesce(pcv.baja,0) = 0
	right join vcVended cv on pcv.CodVended = cv.CodVended  and cv.TipoVendedor = 'Vendedor'
	where coalesce(pcv.PlancomisionID,0) in (0,@PlanComisionID)  
	and cv.TipoVendedor = 'Vendedor'
	and cv.FecBaja is null
end


create procedure deletePlanComision
@PlanComisionID int
as 
begin
	delete from plancomisionvendedor where  PlanComisionID = @PlanComisionID
end

create procedure insertOrUpdatePlanComisionVendedor
@PlanComisionID int, @CodVended int
as
begin
	insert into plancomisionvendedor
	select @PlanComisionID,@CodVended,0
end

exec insertOrUpdatePlanComisionVendedor 48,1

select * from plancomisionvendedor

delete plancomisionvendedor

deleta pal

exec getPlanComisionVendedor 48

select * from vcvended


select * from  plancomision


select sum(valoruni)
from vcclient vcc
join vcCliDebAuto vccda on vcc.CodCliente = vccda.CodCliente
where vcc.codcliente = 2463 

set dateformat dmy 
select *--sum(totalDebito - totalCredito)
from vmcomcab vmcc 
join vcdefcom vcdc on vmcc.codcomvta = vcdc.coddefcom
where vmcc.CodCliente = 2463
and vcdc.afeCtaCte <> 'No' 
and fecContable < '01/03/2020'
order by feccontable

select sum(totalDebito - totalCredito)
from vmcomcab vmcc 
join vcdefcom vcdc on vmcc.codcomvta = vcdc.coddefcom
where vmcc.CodCliente = 2463
and vcdc.afeCtaCte <> 'No'
and fecContable < '01/03/2020' 
--order by feccontable
exec ventasVendedorPlanComision 74
78989+789
select *  from PlanComisionVendedor
select * from vcclidebauto where codcliente = 4697

select * from vcconfac vcc where vcc.CodConFac = 47