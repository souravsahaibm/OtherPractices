using Microsoft.AspNetCore.Mvc;
using StudentAdminPortal.Models.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StudentAdminPortal.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class StudentController : Controller
    {
        private readonly IStudentRepo _sturepo;

        public StudentController(IStudentRepo sturepo)
        {
            _sturepo = sturepo;
        }

        [HttpGet]
        [Route("[action]")]
        public async Task<IActionResult> getAllStudent()
        {
            return Ok( await _sturepo.getAllStudentAsync());
        }
    }
}
