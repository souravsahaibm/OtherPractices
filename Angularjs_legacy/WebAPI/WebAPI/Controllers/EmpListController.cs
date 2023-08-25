using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmpListController : ControllerBase
    {
        private readonly IEmp _emp;

        public EmpListController(IEmp emp)
        {
            this._emp = emp;
        }

        public IActionResult Get()
        {
            return Ok(_emp.get());
        }

        [Route("{id:int}")]
        public IActionResult GetbyId(int id)
        {
            return Ok(_emp.getbyid(id));
        }
    }
}
