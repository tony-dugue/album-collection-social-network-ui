import { HttpHeaders, HttpInterceptorFn } from '@angular/common/http';
import { TokenService } from '../token/token.service';

// Déclaration de l'intercepteur
export const httpTokenInterceptor: HttpInterceptorFn = (req, next) => {
  const tokenService = new TokenService();

  // Récupération du token
  const token = tokenService.token;

  // Si un token est disponible, on ajoute l'entête Authorization
  if (token) {
    const authReq = req.clone({
      headers: req.headers.append('Authorization', `Bearer ${token}`),
    });
    return next(authReq);
  }

  // Si pas de token, on passe la requête sans modification
  return next(req);
};
