using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Net.Http;

namespace ApiConsoleClient
{
    class Program
    {
        static void Main(string[] args)
        {
            var client = new HttpClient();
            client.BaseAddress = new Uri("https://localhost:44337/");
            HttpResponseMessage response = client.GetAsync("api//home//1").Result;
            string result = response.Content.ReadAsStringAsync().Result;
            Console.WriteLine(result);

            Console.Read();
        }
    }
}
