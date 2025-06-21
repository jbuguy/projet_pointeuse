using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace api.Migrations
{
    /// <inheritdoc />
    public partial class Init : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Employe",
                columns: table => new
                {
                    EmployeId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    First_name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Last_name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Birth_date = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Gender = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Phone = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Fixnumber = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Hire_date = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Is_active = table.Column<bool>(type: "bit", nullable: false),
                    Codepointeuse = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Qualification = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Niveau_educatif = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Situation_familiale = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Nombre_enfants = table.Column<int>(type: "int", nullable: false),
                    Soumis_hs = table.Column<bool>(type: "bit", nullable: false),
                    Mcl = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    Mcj = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    Type_contrat = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Date_embauche_debut = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Date_embauche_fin = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Employe", x => x.EmployeId);
                });

            migrationBuilder.CreateTable(
                name: "Site",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Libelle = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Site", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Machine",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Libelle = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    SiteId = table.Column<int>(type: "int", nullable: true),
                    IpAddress = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Port = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    IsActive = table.Column<bool>(type: "bit", nullable: false),
                    TypeMachine = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Machine", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Machine_Site_SiteId",
                        column: x => x.SiteId,
                        principalTable: "Site",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "EmployeMachine",
                columns: table => new
                {
                    EmployeesEmployeId = table.Column<int>(type: "int", nullable: false),
                    MachinesId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_EmployeMachine", x => new { x.EmployeesEmployeId, x.MachinesId });
                    table.ForeignKey(
                        name: "FK_EmployeMachine_Employe_EmployeesEmployeId",
                        column: x => x.EmployeesEmployeId,
                        principalTable: "Employe",
                        principalColumn: "EmployeId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_EmployeMachine_Machine_MachinesId",
                        column: x => x.MachinesId,
                        principalTable: "Machine",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "EmployeService",
                columns: table => new
                {
                    EmployesEmployeId = table.Column<int>(type: "int", nullable: false),
                    ServicesId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_EmployeService", x => new { x.EmployesEmployeId, x.ServicesId });
                    table.ForeignKey(
                        name: "FK_EmployeService_Employe_EmployesEmployeId",
                        column: x => x.EmployesEmployeId,
                        principalTable: "Employe",
                        principalColumn: "EmployeId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "MachineService",
                columns: table => new
                {
                    MachinesId = table.Column<int>(type: "int", nullable: false),
                    ServicesId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MachineService", x => new { x.MachinesId, x.ServicesId });
                    table.ForeignKey(
                        name: "FK_MachineService_Machine_MachinesId",
                        column: x => x.MachinesId,
                        principalTable: "Machine",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Period",
                columns: table => new
                {
                    PeriodId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ServiceId = table.Column<int>(type: "int", nullable: true),
                    StartDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    EndDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    IsActive = table.Column<bool>(type: "bit", nullable: false),
                    CreatedAt = table.Column<DateTime>(type: "datetime2", nullable: false),
                    EmployeId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Period", x => x.PeriodId);
                    table.ForeignKey(
                        name: "FK_Period_Employe_EmployeId",
                        column: x => x.EmployeId,
                        principalTable: "Employe",
                        principalColumn: "EmployeId");
                });

            migrationBuilder.CreateTable(
                name: "Schedule",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ServiceId = table.Column<int>(type: "int", nullable: true),
                    CreatedAt = table.Column<DateTime>(type: "datetime2", nullable: false),
                    UpdatedAt = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Schedule", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Service",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Designation = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Active = table.Column<bool>(type: "bit", nullable: false),
                    SiteId = table.Column<int>(type: "int", nullable: true),
                    ToleranceCalcul = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    SoumisHS = table.Column<bool>(type: "bit", nullable: false),
                    DureeLimite = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    DefaultScheduleId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Service", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Service_Schedule_DefaultScheduleId",
                        column: x => x.DefaultScheduleId,
                        principalTable: "Schedule",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Service_Site_SiteId",
                        column: x => x.SiteId,
                        principalTable: "Site",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "Shift",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ScheduleId = table.Column<int>(type: "int", nullable: true),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    StartTime = table.Column<TimeOnly>(type: "time", nullable: false),
                    EndTime = table.Column<TimeOnly>(type: "time", nullable: false),
                    ToleranceMin = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    ToleranceMax = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    TolerancefMin = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    TolerancefMax = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    Day = table.Column<int>(type: "int", nullable: false),
                    Break = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Shift", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Shift_Schedule_ScheduleId",
                        column: x => x.ScheduleId,
                        principalTable: "Schedule",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateIndex(
                name: "IX_EmployeMachine_MachinesId",
                table: "EmployeMachine",
                column: "MachinesId");

            migrationBuilder.CreateIndex(
                name: "IX_EmployeService_ServicesId",
                table: "EmployeService",
                column: "ServicesId");

            migrationBuilder.CreateIndex(
                name: "IX_Machine_SiteId",
                table: "Machine",
                column: "SiteId");

            migrationBuilder.CreateIndex(
                name: "IX_MachineService_ServicesId",
                table: "MachineService",
                column: "ServicesId");

            migrationBuilder.CreateIndex(
                name: "IX_Period_EmployeId",
                table: "Period",
                column: "EmployeId");

            migrationBuilder.CreateIndex(
                name: "IX_Period_ServiceId",
                table: "Period",
                column: "ServiceId");

            migrationBuilder.CreateIndex(
                name: "IX_Schedule_ServiceId",
                table: "Schedule",
                column: "ServiceId");

            migrationBuilder.CreateIndex(
                name: "IX_Service_DefaultScheduleId",
                table: "Service",
                column: "DefaultScheduleId");

            migrationBuilder.CreateIndex(
                name: "IX_Service_SiteId",
                table: "Service",
                column: "SiteId");

            migrationBuilder.CreateIndex(
                name: "IX_Shift_ScheduleId",
                table: "Shift",
                column: "ScheduleId");

            migrationBuilder.AddForeignKey(
                name: "FK_EmployeService_Service_ServicesId",
                table: "EmployeService",
                column: "ServicesId",
                principalTable: "Service",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_MachineService_Service_ServicesId",
                table: "MachineService",
                column: "ServicesId",
                principalTable: "Service",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Period_Service_ServiceId",
                table: "Period",
                column: "ServiceId",
                principalTable: "Service",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Schedule_Service_ServiceId",
                table: "Schedule",
                column: "ServiceId",
                principalTable: "Service",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Schedule_Service_ServiceId",
                table: "Schedule");

            migrationBuilder.DropTable(
                name: "EmployeMachine");

            migrationBuilder.DropTable(
                name: "EmployeService");

            migrationBuilder.DropTable(
                name: "MachineService");

            migrationBuilder.DropTable(
                name: "Period");

            migrationBuilder.DropTable(
                name: "Shift");

            migrationBuilder.DropTable(
                name: "Machine");

            migrationBuilder.DropTable(
                name: "Employe");

            migrationBuilder.DropTable(
                name: "Service");

            migrationBuilder.DropTable(
                name: "Schedule");

            migrationBuilder.DropTable(
                name: "Site");
        }
    }
}
