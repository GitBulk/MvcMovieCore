using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Localization;

// For more information on enabling MVC for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace MvcMovieCore.Web.Controllers
{
    [Route("api/[controller]")]
    public class AboutController : Controller
    {
        private readonly IStringLocalizer<AboutController> localizer;
        public AboutController(IStringLocalizer<AboutController> localizer)
        {
            this.localizer = localizer;
        }

        [HttpGet]
        public string Get()
        {
            return localizer["About Title"];
        }
    }
}
