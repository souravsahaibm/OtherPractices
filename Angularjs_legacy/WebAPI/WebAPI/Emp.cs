using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI
{
    public class Emp : IEmp
    {
        private string[] empname = new string[] { "Sourav", "Atanu", "Debonil" };
        public List<string> get()
        {
            return empname.ToList();
        }

        public string getbyid(int id)
        {
            return empname[id];
        }
    }
}
