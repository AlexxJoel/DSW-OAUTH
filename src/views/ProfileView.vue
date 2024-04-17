<template>
  <div>


    <div class="about">
      <div class="position-relative overflow-hidden px-3 px-md-5 m-md-3 text-center ">
        <div class="col-md-6 p-lg-5 mx-auto">

          <div class="position-relative">
            <img :src="$auth.user.picture" class="rounded-circle" style="width: 150px; height: 150px;" alt="Profile"/>
<!--            logo verified -->
            <img src="https://img.icons8.com/color/452/verified-account.png" style="width: 20px; height: 20px;" alt="verified" class="position-absolute top-100 start-50 translate-middle" v-if="$auth.user.email_verified" />
          </div>

          <h1 class="display-6 fw-bold mt-3">{{ $auth.user.name }}</h1>
          <h3 class="fw-normal text-muted mb-3" style="font-size: 20px">{{ $auth.user.email }}</h3>

          <p class="lead">
            Estudiante de la Universidad Tecnológica Emiliano Zapata, Morelos. En la carrera de Ingeniería en
            Tecnologías de la Información y Comunicación.
          </p>



          <hr>

          Sobre mi:

          <div class="text-start">

            Soy Joel {{ $auth.user.family_name }}, pero me gusta que me llamen {{ $auth.user.given_name }}. si gustas contactarme puedes hacerlo a través de mi correo {{ $auth.user.email }} o en mis redes sociales.

          </div>

          <button class="btn btn-primary mt-3 " type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample"
                  aria-expanded="false" aria-controls="collapseExample">
            Ver más
          </button>



          <div class="collapse" id="collapseExample">
            <div class="card card-body">
              <p class="lead">
                Me gusta la programación, el diseño web y la tecnología en general. Me considero una persona autodidacta
                y con muchas ganas de aprender.
              </p>
            </div>
          </div>



        </div>
        <div class="product-device shadow-sm d-none d-md-block"></div>
        <div class="product-device product-device-2 shadow-sm d-none d-md-block"></div>
      </div>
    </div>



  </div>
</template>

<script>
export default {
  name: "ProfileView",
};
</script>