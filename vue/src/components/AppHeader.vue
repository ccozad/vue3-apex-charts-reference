<script setup lang="ts">
import { onBeforeUnmount, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

// Visually close any open navbar dropdown.
function closeOpenDropdowns() {
  document.querySelectorAll('.navbar .dropdown-menu.show').forEach((menu) => {
    menu.classList.remove('show')
    const toggle = menu.parentElement?.querySelector('.dropdown-toggle')
    toggle?.classList.remove('show')
    toggle?.setAttribute('aria-expanded', 'false')
  })
}

// Bootstrap closes dropdowns via a bubbling document-click listener, but the
// ApexCharts SVG calls stopPropagation, so clicks on a chart never reach it and
// the menu stays open. Listen in the capture phase so an outside click always
// closes the menu, regardless of what swallows the event later.
function handleOutsideClick(event: MouseEvent) {
  const target = event.target as Element | null
  if (!target?.closest('.navbar .dropdown')) {
    closeOpenDropdowns()
  }
}

onMounted(() => document.addEventListener('click', handleOutsideClick, true))
onBeforeUnmount(() => document.removeEventListener('click', handleOutsideClick, true))

// SPA navigation doesn't reload, so close the menu after picking an item.
router.afterEach(() => closeOpenDropdowns())
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
