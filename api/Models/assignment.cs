using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Models
{
    public class Assignment
    {
        public int Id { get; set; }
        public int? ScheduleId { get; set; }
        public Schedule? Schedule { get; set; }
        public int? ServiceId { get; set; }
        public Service? Service { get; set; }
        public DateOnly StartDate { get; set; }
        public DateOnly EndDate { get; set; }
        public bool Active { get; set; }
    }
}