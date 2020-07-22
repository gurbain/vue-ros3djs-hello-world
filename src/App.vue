<template>
  <ros3d-viewer
    :ros="ros"
    v-if="connected"
  >
    <ros3d-axes />
    <ros3d-grid />

    <ros3d-laser-scan topic="/laserscan" />
  </ros3d-viewer>
</template>

<script>
import ROSLIB from 'roslib';
import { Ros3dViewer, Ros3dGrid, Ros3dAxes, Ros3dLaserScan } from 'vue-ros3djs';

export default {
  name: 'VueRos3djsDemo',
  components: {
    Ros3dViewer,
    Ros3dGrid,
    Ros3dAxes,
    Ros3dLaserScan
  },
  data: () => ({
    ros: null,
    connected: false
  }),
  mounted () {
    this.ros = new ROSLIB.Ros({
      url: 'wss://api.gurbain.be/exoli1'
    });

    this.ros.on('connection', () => {
      this.connected = true;
    });
  }
}
</script>