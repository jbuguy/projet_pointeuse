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
        public decimal TolereanceMin { get; set; }
        [Column(TypeName = "decimal(18,2)")]
        public decimal TolereanceMax { get; set; }
        [Column(TypeName = "decimal(18,2)")]
        public decimal TolereancefMin { get; set; }
        [Column(TypeName = "decimal(18,2)")]
        public decimal TolereancefMax { get; set; }
        public string Day { get; set; } = string.Empty;
        public bool Break { get; set; }

    }
}