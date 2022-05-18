using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StudentAdminPortal.Models
{
    public class Student
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public DateTime DOB { get; set; }
        public string Contact { get; set; }
        public string image { get; set; }
        public int genderId { get; set; }
        public Gender gender { get; set; }
        public Address address { get; set; }

    }
}
