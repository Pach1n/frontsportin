
import { Routes } from '@angular/router';
import { Home } from './component/shared/home/home';
import { UsuarioPlistAdminRouted } from './component/usuario/plist-admin-routed/usuario-plist';
import { ArticuloPlistAdminRouted } from './component/articulo/plist-admin-routed/articulo-plist';
import { ArticuloViewAdminRouted } from './component/articulo/view-admin-routed/articulo-view';
import { UsuarioViewAdminRouted } from './component/usuario/view-admin-routed/usuario-view';
import { CategoriaPlistAdminRouted } from './component/categoria/plist-admin-routed/categoria-plist';
import { PartidoPlistAdminRouted } from './component/partido/plist-admin-routed/partido-plist';
import { PartidoViewAdminRouted } from './component/partido/view-admin-routed/partido-view';
import { FacturaPlistAdminRouted } from './component/factura/plist-admin-routed/factura-plist';
import { CompraPlistAdminRouted } from './component/compra/plist-admin-routed/compra-plist';
import { CompraViewAdminRouted } from './component/compra/view-admin-routed/compra-view';
import { RolusuarioPlist } from './component/rolusuario/plist-admin-routed/rolusuario-plist';
import { TipoarticuloPlistAdminRouted } from './component/tipoarticulo/plist-admin-routed/tipoarticulo-plist';
import { TipoarticuloViewAdminRouted } from './component/tipoarticulo/view-admin-routed/tipoarticulo-view';
import { JugadorPlistAdminRouted } from './component/jugador/plist-admin-routed/jugador-plist';
import { JugadorViewAdminRouted } from './component/jugador/view-admin-routed/jugador-view';
import { LigaPlistAdminRouted } from './component/liga/plist-admin-routed/liga-plist';
import { NoticiaPlistAdminRouted } from './component/noticia/plist-admin-routed/noticia-plist';
import { ClubPlistAdminRouted } from './component/club/plist-admin-routed/club-plist';
import { CuotaPlistAdminRouted } from './component/cuota/plist-admin-routed/cuota-plist';
import { TipousuarioPlistAdminRouted } from './component/tipousario/plist-admin-routed/tipousuario-plist';
import { TemporadaPlistAdminRouted } from './component/temporada/plist-admin-routed/temporada-plist';
import { EquipoPlistAdminRouted } from './component/equipo/plist-admin-routed/equipo-plist';
import { EquipoViewAdminRouted } from './component/equipo/view-admin-routed/equipo-view';
import { CarritoPlistAdminRouted } from './component/carrito/plist-admin-routed/carrito-plist';
import { ComentarioPlistAdminRouted } from './component/comentario/plist-admin-routed/comentario-plist';
import { ComentarioViewAdminRouted } from './component/comentario/view-admin-routed/comentario-view';
import { PagoPlistComponent } from './component/pago/plist-admin-routed/pago-plist';
import { PuntuacionPlistAdminRouted } from './component/puntuacion/plist-admin-routed/puntuacion-plist';
import { PuntuacionViewAdminRouted } from './component/puntuacion/view-admin-routed/puntuacion-view';
import { NoticiaViewAdminRouted } from './component/noticia/view-admin-routed/view-admin-routed';
import { FacturaViewAdminRouted } from './component/factura/view-admin-routed/factura-view';
import { ComentarioartPlistAdminRouted } from './component/comentarioart/plist-admin-routed/comentarioart-plist';
import { TemporadaViewAdminRouted } from './component/temporada/view-admin-routed/temporada-view';
import { PagoViewAdminRouted } from './component/pago/view-admin-routed/pago-view';
import { ClubViewAdminRouted } from './component/club/view-admin-routed/club-view';
import { CuotaViewAdminRouted } from './component/cuota/view-admin-routed/cuota-view';
import { TipousuarioViewAdminRouted } from './component/tipousario/view-admin-routed/tipousuario-view';
import { CarritoViewAdminRouted } from './component/carrito/view-admin-routed/view-admin-routed';
import { RolusuarioViewAdminRouted } from './component/rolusuario/view-admin-routed/rolusuario-view';
import { CategoriaViewAdminRouted } from './component/categoria/view-admin-routed/categoria-view';
import { LigaViewAdminRouted } from './component/liga/view-admin-routed/liga-view';
import { ComentarioartViewAdminRouted } from './component/comentarioart/view-admin-routed/comentarioart-view';
import { PagoDeleteAdminRouted } from './component/pago/delete-admin-routed/pago-delete';
import { LigaDeleteAdminRouted } from './component/liga/delete-admin-routed/liga-delete';
import { LigaEditAdminRouted } from './component/liga/edit-admin-routed/liga-edit';


export const routes: Routes = [

    { path: '', component: Home },
    { path: 'usuario', component: UsuarioPlistAdminRouted },
    { path: 'usuario/tipousuario/:id_tipousuario', component: UsuarioPlistAdminRouted },
    { path: 'usuario/rol/:id_rol', component: UsuarioPlistAdminRouted },
    { path: 'usuario/club/:id_club', component: UsuarioPlistAdminRouted },
    { path: 'usuario/view/:id', component: UsuarioViewAdminRouted},
    { path: 'temporada', component: TemporadaPlistAdminRouted },
    { path: 'temporada/club/:id_club', component: TemporadaPlistAdminRouted },
    { path: 'temporada/view/:id', component: TemporadaViewAdminRouted },
    { path: 'liga', component: LigaPlistAdminRouted },
    { path: 'liga/view/:id', component: LigaViewAdminRouted },
    { path: 'liga/edit/:id', component: LigaEditAdminRouted },
    { path: 'liga/delete/:id', component: LigaDeleteAdminRouted },
    { path: 'liga/equipo/:id_equipo', component: LigaPlistAdminRouted },
    { path: 'articulo', component: ArticuloPlistAdminRouted},
    { path: 'articulo/tipoarticulo/:id_tipoarticulo', component: ArticuloPlistAdminRouted},
    { path: 'usuario/:id', component: UsuarioViewAdminRouted},
    { path: 'articulo/:tipoarticulo', component: ArticuloPlistAdminRouted},
    { path: 'articulo/view/:id', component: ArticuloViewAdminRouted},
    { path: 'categoria', component: CategoriaPlistAdminRouted},
    { path: 'categoria/temporada/:id_temporada', component: CategoriaPlistAdminRouted},
    { path: 'categoria/view/:id', component: CategoriaViewAdminRouted },
    { path: 'partido', component: PartidoPlistAdminRouted},
    { path: 'partido/liga/:id_liga', component: PartidoPlistAdminRouted},
    { path: 'partido/view/:id', component: PartidoViewAdminRouted},
    { path: 'factura', component: FacturaPlistAdminRouted },
    { path: 'factura/:usuario', component: FacturaPlistAdminRouted },
    { path: 'factura/view/:id', component: FacturaViewAdminRouted },
    { path: 'factura/usuario/:id_usuario', component: FacturaPlistAdminRouted },
    { path: 'compra', component: CompraPlistAdminRouted },
    { path: 'compra/articulo/:id_articulo', component: CompraPlistAdminRouted },
    { path: 'compra/factura/:id_factura', component: CompraPlistAdminRouted },
    { path: 'compra/view/:id', component: CompraViewAdminRouted },
    { path: 'rolusuario', component: RolusuarioPlist },  
    { path: 'rolusuario/view/:id', component: RolusuarioViewAdminRouted},
    { path: 'tipoarticulo', component : TipoarticuloPlistAdminRouted},
    { path: 'tipoarticulo/club/:id_club', component : TipoarticuloPlistAdminRouted},
    { path: 'tipoarticulo/view/:id', component : TipoarticuloViewAdminRouted},
    { path: 'jugador', component: JugadorPlistAdminRouted},
    { path: 'jugador/usuario/:id_usuario', component: JugadorPlistAdminRouted},
    { path: 'jugador/equipo/:id_equipo', component: JugadorPlistAdminRouted},
    { path: 'jugador/view/:id', component: JugadorViewAdminRouted },
    { path: 'noticia', component: NoticiaPlistAdminRouted},
    { path: 'noticia/club/:id_club', component: NoticiaPlistAdminRouted},
    { path: 'noticia/view/:id', component: NoticiaViewAdminRouted },
    { path: 'club/plist', component: ClubPlistAdminRouted},
    { path: 'club', component: ClubPlistAdminRouted},
    { path: 'club/view/:id', component: ClubViewAdminRouted},
    { path: 'cuota', component: CuotaPlistAdminRouted},
    { path: 'cuota/equipo/:id_equipo', component: CuotaPlistAdminRouted},
    { path: 'cuota/view/:id', component: CuotaViewAdminRouted},
    { path: 'tipousuario', component: TipousuarioPlistAdminRouted},
    { path: 'tipousuario/view/:id', component: TipousuarioViewAdminRouted },
    { path: 'equipo', component: EquipoPlistAdminRouted },
    { path: 'equipo/categoria/:id_categoria', component: EquipoPlistAdminRouted },
    { path: 'equipo/view/:id', component: EquipoViewAdminRouted },
    { path: 'equipo/usuario/:id_usuario', component: EquipoPlistAdminRouted },
    { path: 'carrito', component: CarritoPlistAdminRouted },
    { path: 'carrito/usuario/:id_usuario', component: CarritoPlistAdminRouted },
    { path: 'carrito/articulo/:id_articulo', component: CarritoPlistAdminRouted },
    { path: 'carrito/view/:id', component: CarritoViewAdminRouted },
    { path: 'comentario', component: ComentarioPlistAdminRouted },
    { path: 'comentario/usuario/:id_usuario', component: ComentarioPlistAdminRouted},
    { path: 'comentario/noticia/:id_noticia', component: ComentarioPlistAdminRouted},
    { path: 'comentario/view/:id', component: ComentarioViewAdminRouted},
    { path: 'pago', component: PagoPlistComponent},
    { path: 'pago/cuota/:id_cuota', component: PagoPlistComponent},
    { path: 'pago/jugador/:id_jugador', component: PagoPlistComponent},
    { path: 'pago/view/:id', component: PagoViewAdminRouted},
    { path: 'pago/delete/:id', component: PagoDeleteAdminRouted},
    { path: 'puntuacion', component: PuntuacionPlistAdminRouted},
    { path: 'puntuacion/noticia/:id_noticia', component: PuntuacionPlistAdminRouted},
    { path: 'puntuacion/usuario/:id_usuario', component: PuntuacionPlistAdminRouted},
    { path: 'puntuacion/view/:id', component: PuntuacionViewAdminRouted},
    { path: 'comentarioart', component: ComentarioartPlistAdminRouted},
    { path: 'comentarioart/articulo/:id_articulo', component: ComentarioartPlistAdminRouted},
    { path: 'comentarioart/usuario/:id_usuario', component: ComentarioartPlistAdminRouted},
    { path: 'comentarioart/view/:id', component: ComentarioartViewAdminRouted},

];
