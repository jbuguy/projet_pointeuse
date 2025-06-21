using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace api.Models
{
    public class Service
    {
        public int Id { get; set; }
        public string Designation { get; set; } = string.Empty;
        public string Name { get; set; } = string.Empty;
        public bool Active { get; set; }
        public int? SiteId { get; set; }
        public Site? Site { get; set; }
        [Column(TypeName = "decimal(18,2)")]
        public List<Employe> Employes { get; set; } = new List<Employe>();
        public decimal ToleranceCalcul { get; set; }
        public bool SoumisHS { get; set; }
        [Column(TypeName = "decimal(18,2)")]
        public decimal DureeLimite { get; set; }
        public int? DefaultScheduleId { get; set; }

        public Schedule? DefaultSchedule { get; set; }

        public List<Schedule> Schedules { get; set; } = new List<Schedule>();
        public List<Machine> Machines { get; set; } = new List<Machine>();
    }
}