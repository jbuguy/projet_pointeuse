using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace api.Models
{
    public class TimeEntry
    {
        public int Id { get; set; }
        public int? ServiceId { get; set; }
        public Service? Service { get; set; }
        public int? EmployeId { get; set; }
        public Employe? Employe { get; set; }
        public TimeOnly ScheduleIn { get; set; }
        public TimeOnly ScheduleOut { get; set; }
        public TimeOnly ActualIn { get; set; }
        public TimeOnly ActualOut { get; set; }
        [Column(TypeName = "decimal(10,2)")]
        public decimal BreakMin { get; set; }
        public string EntryType { get; set; } = string.Empty;
        public string Notes { get; set; } = string.Empty;

        public DateTime UpdateAt { get; set; }
        

    }
}