using Microsoft.EntityFrameworkCore;
using StudentAdminPortal.Controllers.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StudentAdminPortal.Models.Repository
{
    public class StudentRepo : IStudentRepo
    {
        private readonly AppDbContext _dbContext;

        public StudentRepo(AppDbContext dbCOntext)
        {
            _dbContext = dbCOntext;
        }

        public async Task<List<Student>> getAllStudentAsync()
        {
            return await _dbContext.student.ToListAsync();
        }
    }
}
