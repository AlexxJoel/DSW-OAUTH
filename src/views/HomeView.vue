<template>
  <div class="home">
    <main>
      <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-body-tertiary">
        <div class="col-md-6 p-lg-5 mx-auto my-5">
          <h1 class="display-3 fw-bold">Venta de productos</h1>
          <h3 class="fw-normal text-muted mb-3">Busca y encuentra los mejores productos</h3>
          <div class="d-flex gap-3 justify-content-center lead fw-normal">
            <a class="icon-link" href="#">
              Aprender más
              <svg class="bi"><use xlink:href="#chevron-right"></use></svg>
            </a>
            <a class="icon-link" href="#">
              Comprar ahora
              <svg class="bi"><use xlink:href="#chevron-right"></use></svg>
            </a>
          </div>
        </div>
        <div class="product-device shadow-sm d-none d-md-block"></div>
        <div class="product-device product-device-2 shadow-sm d-none d-md-block"></div>
      </div>

      <div class=" flex-md-equal w-100 my-md-3 ps-md-3">
        <div class="text-bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
          <div class="my-3 py-3">
            <h2 class="display-5">El mejor producto</h2>
            <p class="lead">Con la mejor calidad y precio.</p>
          </div>
          <div class="bg-body-tertiary shadow-sm mx-auto" style="width: 80%; height: 300px; border-radius: 21px 21px 0 0;"></div>
        </div>

        <div class="bg-body-tertiary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
          <div class="my-3 p-3">
            <h2 class="display-5">El mejor servicio</h2>
            <p class="lead">Con la mejor atención al cliente.</p>
          </div>
          <div class="bg-dark shadow-sm mx-auto" style="width: 80%; height: 300px; border-radius: 21px 21px 0 0;"></div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "home",
};
</script>