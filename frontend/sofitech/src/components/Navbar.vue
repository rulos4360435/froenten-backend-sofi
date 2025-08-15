<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <router-link class="nav-link" to="/">Home</router-link>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">

          <!-- SISANAR -->
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle d-flex align-items-center" href="#" role="button"
              data-bs-toggle="dropdown" aria-expanded="false">
              <img :src="sisanarLogo" alt="Sisanar Logo" class="company-logo me-2" />
              Sisanar
            </a>
            <ul class="dropdown-menu">
              <li>
                <a class="dropdown-item" href="#">Buscar</a>
              </li>
              <li>
                <router-link class="dropdown-item" to="/buscar-paciente">Buscar Paciente</router-link>
              </li>
              <li>
                <router-link class="dropdown-item" to="/buscar-usuario">Buscar Usuario</router-link>
              </li>
            </ul>
          </li>

          <!-- OTRAS EMPRESAS -->
          <li class="nav-item">
            <a class="nav-link d-flex align-items-center" href="#">
              <img :src="medicaColomLogo" alt="Medica Colombia" class="company-logo me-2" />
              Medica Colombia
            </a>
          </li>

          <li class="nav-item">
            <a class="nav-link d-flex align-items-center" href="#">
              <img :src="sanFernandoLogo" alt="Clinica San Fernando" class="company-logo me-2" />
              Clinica San Fernando
            </a>
          </li>

          <li class="nav-item">
            <a class="nav-link d-flex align-items-center" href="#">
              <img :src="factoringLogo" alt="Factoring" class="company-logo me-2" />
              Factoring S.A.S
            </a>
          </li>

          <li class="nav-item">
            <a class="nav-link d-flex align-items-center" href="#">
              <img :src="cuidarteLogo" alt="Cuidarte En Casa" class="company-logo me-2" />
              Cuidarte En Casa
            </a>
          </li>

          <li class="nav-item">
            <a class="nav-link d-flex align-items-center" href="#">
              <img :src="saludLogo" alt="Salud en casa" class="company-logo me-2" />
              Salud en casa
            </a>
          </li>

          <li class="nav-item">
            <a class="nav-link d-flex align-items-center" href="#">
              <img :src="transervisocialLogo" alt="Transervisocial" class="company-logo me-2" />
              Transervisocial
            </a>
          </li>

        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
// Importa las imágenes (nombres actualizados, sin espacios ni mayúsculas)
import sisanarLogo from '@/images/sisanar.png'
import medicaColomLogo from '@/images/medicacolom.png'
import sanFernandoLogo from '@/images/clinica_san_fernando.png'
import factoringLogo from '@/images/factoring.png'
import cuidarteLogo from '@/images/cuidarte.png'
import saludLogo from '@/images/salud.png'
import transervisocialLogo from '@/images/transervisocial.png'
</script>

<style scoped>
.company-logo {
  width: 24px;
  height: 24px;
  vertical-align: middle;
}
</style>
