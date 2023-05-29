using GoldenEleganceProyecto.Context;
using GoldenEleganceProyecto.Models;
using GoldenEleganceProyecto.Service.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using GoldenEleganceProyecto.Service.IServices;
using System.Collections.Generic;



namespace GoldenEleganceProyecto.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductosController : ControllerBase
    {

        private readonly IUsuariosServicio _usuariosServicio;

        public ProductosController( IUsuariosServicio usuariosServicio)
        {
            _usuariosServicio = usuariosServicio;
        }

        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        [Route("ObtenerListaUsuarios")]
        public async Task<IActionResult> ObtenerListado()
        {
            var usuarios = await _usuariosServicio.ObtenerLista();

            return Ok(usuarios);
        }

        // POST: ProductosController/Edit/5
        [HttpPost]
        [Route("GuardarUsuario")]
        public async Task<IActionResult> Guardar(Usuarios usuario)
        {
            var usuarios = await _usuariosServicio.CrearUsuario(usuario);

            return Ok(usuarios);
        }

        // POST: ProductosController/Delete/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Delete(int id, IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }
    }
}
