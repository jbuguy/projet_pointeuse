using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Models
{
    public class Machine
    {
        public int PointeuseId { get; set; }
        public string Libelle { get; set; } = string.Empty;
        public Site? Site { get; set; }
        public string IpAddress { get; set; } = string.Empty;
        public string Port { get; set; }= string.Empty;
        public bool IsActive { get; set; }
        public string TypeMachine { get; set; }= string.Empty;
    }
}