<template>
  <div class="links">
    <h3>Lista de videos por orden de aparicion</h3>
    <div v-for="(video, index) in videos" :key="index" class="video-box">
      <video-box :video="video" />
    </div>
  </div>
</template>

<script>
import VideoBox from "../components/VideoBox";

export default {
  components: {
    VideoBox
  },
  data() {
    return {
      videos: [
        "Militares disparando en frente de edificios.mp4",
        "carabineros de civil salen de un banco y comienza a salir humo.mp4",
        "carabinero llora en medio de la gente.mp4",
        "Militares disparando a mansalva en Bellavista Valparaiso 2.mp4",
        "Militares disparando a mansalva en Bellavista Valparaiso.mp4",
        "Militares amedrentando personas con sus rifles en apoquindo 2.mp4",
        "Militares amedrentando personas con sus rifles en apoquindo.mp4",
        "protestas en escuela militar Santiago.mp4",
        "carabineros guardando cajas con televisores en su patrulla.mp4",
        "carabineros provocando incendio.mp4",
        "militar dando instrucciones a personas para entrar a tomar cosas de un local.mp4",
        "Manifestaciones masivas en Concepcion 21-10-2019.mp4",
        "Detencion de carabineros usando un auto particular.mp4",
        "carabineros y pdi dan ventaja para despues disparar por la espalda.mp4",
        "carabineros persigue a una persona que esta grabando hasta su casa.mp4",
        "Persona colgada en pedro aguirrez cerda.mp4",
        "Acusan a carabineros infiltrados provocando disturbios en una feria.mp4",
        "infiltrados disparan en Bulnes.mp4",
        "zorron opinando del alza del pasaje del metro.mp4",
        "lamada a radio biobio acerca de gente muerta en la noche de valparaiso 19 oct 2019.mp4",
        "joven con bala en el brazo.mp4",
        "carabinero acelera en su moto y cae.mp4",
        "carabineros disparando a manifestantes en el centro de santiago.mp4",
        "mujer con disparo en la cabeza tendida en el suelo.mp4",
        "incendio en Monserrat con gente atratada.mp4",
        "persona defiende a otro de carabineros en la reja de su casa.mp4",
        "Militar le dispara a fotografo en el pie.mp4",
        "furgon de carabineros superado por protestantes.mp4",
        "vida normal en santiago oriente.mp4",
        "Chadwick cagao de la risa.mp4",
        "personas reanimando a joven baleado en La Serena.mp4",
        "militares acarrean a joven inconsciente.mp4",
        "joven en colina inconsciente.mp4",
        "prensa filmando una protesta falsa.mp4",
        "militares tienen a gente en el suelo dentro de un local.mp4",
        "militares saliendo de aguas andinas.mp4",
        "encapuchados aparecen de una patrulla de carabineros.mp4",
        "civil encara a saqueadores.mp4",
        "carabineros atropella a una persona en Lampa 4.mp4",
        "carabineros atropella a una persona en Lampa 3.mp4",
        "robo de auto en copec.mp4",
        "carabinero le ordena a companero que dispare.mp4",
        "senora en el suelo por disparo en la cabeza.mp4",
        "joven atropellado en el piso.mp4",
        "carabineros acelerando atropellando gente.mp4",
        "joven muerto en lampa.mp4",
        "carabineros consumiendo algo.mp4",
        "Victor marileo es transportado hacia un helicoptero. Manalich no dice nada.mp4",
        "vehiculo de carabineros atropella a un manifestante.mp4",
        "carabinero baila.mp4",
        "manifestantes abren paso a camion de bomberos.mp4",
        "infiltrados detienen a manifestante que los descubre.mp4",
        "carabineros atropella a una persona en Lampa.mp4",
        "auga comienza a fluir en rio.mp4",
        "valparaiso noche del 19 oct 2019 2.mp4.mp4",
        "mujer pregunta a que comisaria y no recibe respuesta1.mp4",
        "tecnico en construccion increpa a militar.mp4",
        "mujer pregunta a que comisaria y no recibe respuesta.mp4",
        "carabineros golpea  a un nino.mp4",
        "valparaiso noche del 19 oct 2019.mp4",
        "Hombre con la pierna fracturada recibe patada de carabinero.mp4",
        "Maria jose guerrero detenida.mp4",
        "homecenter coquimbo.mp4",
        "micro abandonada en santiago.mp4"
      ]
    };
  }
};
</script>

<style>
.video-box {
  margin-bottom: 10px;
}

.video-box video {
  width: 300px;
}
</style>
