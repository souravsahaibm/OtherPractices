using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace MyFirstWebAPI.Controllers
{
    public class HomeController : ApiController
    {
        private string[] STR = new string[] { "Sourav", "Debonil", "Atanu" };
        public string[] Get()
        {
            return STR;
        }
        public string Get(int id)
        {
            return STR[id];
        }
    }
}
