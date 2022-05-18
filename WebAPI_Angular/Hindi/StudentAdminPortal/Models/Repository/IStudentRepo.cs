using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StudentAdminPortal.Models.Repository
{
    public interface IStudentRepo
    {
        Task<List<Student>> getAllStudentAsync();
    }
}
