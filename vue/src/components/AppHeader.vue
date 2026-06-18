<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <RouterLink class="navbar-brand" to="/">Apex Chart Demo</RouterLink>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item">
            <RouterLink class="nav-link" to="/" exact-active-class="active">Home</RouterLink>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              :class="{ active: route.path.startsWith('/simple') }"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Simple Examples
            </a>
            <ul class="dropdown-menu">
              <li>
                <RouterLink class="dropdown-item" to="/simple/area-chart" active-class="active"
                  >Area Chart</RouterLink
                >
              </li>
              <li>
                <RouterLink class="dropdown-item" to="/simple/bar-chart" active-class="active"
                  >Bar Chart</RouterLink
                >
              </li>
              <li>
                <RouterLink class="dropdown-item" to="/simple/box-chart" active-class="active"
                  >Box Chart</RouterLink
                >
              </li>
              <li>
                <RouterLink class="dropdown-item" to="/simple/column-chart" active-class="active"
                  >Column Chart</RouterLink
                >
              </li>
              <li>
                <RouterLink class="dropdown-item" to="/simple/donut-chart" active-class="active"
                  >Donut Chart</RouterLink
                >
              </li>
              <li>
                <RouterLink class="dropdown-item" to="/simple/line-chart" active-class="active"
                  >Line Chart</RouterLink
                >
              </li>
              <li>
                <RouterLink class="dropdown-item" to="/simple/treemap-chart" active-class="active"
                  >Treemap Chart</RouterLink
                >
              </li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              :class="{ active: route.path.startsWith('/complex') }"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Complex Examples
            </a>
            <ul class="dropdown-menu">
              <li>
                <RouterLink class="dropdown-item" to="/complex/area-chart" active-class="active"
                  >Area Chart</RouterLink
                >
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/about" active-class="active">About</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
