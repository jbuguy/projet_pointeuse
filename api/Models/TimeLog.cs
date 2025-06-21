using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Models
{
    public class TimeLog
    {
        public int Id { get; set; }
        public int? MachineId { get; set; }
        public Machine? Machine { get; set; }
        public int? EmployeId { get; set; }
        public Employe? Employe { get; set; }
        public DateTime LogTime { get; set; }

        public string Type { get; set; } = string.Empty;
        public string Raw { get; set; } = string.Empty;

    }
}