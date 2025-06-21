using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace api.Models
{
    public class Shift
    {
        public int Id { get; set; }
        public int? ScheduleId { get; set; }
        public Schedule? Schedule { get; set; }
        public string Name { get; set; } = string.Empty;
        public TimeOnly StartTime { get; set; }
        public TimeOnly EndTime { get; set; }
        [Column(TypeName = "decimal(18,2)")]
        public decimal ToleranceMin { get; set; }
        [Column(TypeName = "decimal(18,2)")]
        public decimal ToleranceMax { get; set; }
        [Column(TypeName = "decimal(18,2)")]
        public decimal TolerancefMin { get; set; }
        [Column(TypeName = "decimal(18,2)")]
        public decimal TolerancefMax { get; set; }
        public DayOfWeek Day { get; set; } 
        public bool Break { get; set; }

    }
}