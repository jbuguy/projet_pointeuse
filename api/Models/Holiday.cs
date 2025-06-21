using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Models
{
    public class Holiday
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public DateOnly StartDate { get; set; }
        public DateOnly EndDate { get; set; }
        public int? ServiceId{ get; set; }
        public bool Active { get; set; }
    }
}