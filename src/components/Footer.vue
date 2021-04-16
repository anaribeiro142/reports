<template>
    <footer class="phone-viewport">
        <div class="social">
          <a class="facebook" href="#">
            <i class="fab fa-facebook fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
          </a>
          <a class="twitter" href="#">
            <i class="fab
             fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
          
          </a>
          <a class="linkedin" href="#">
            <i class="fab fa-linkedin fa-lg white-text mr-md-5 mr-3 fa-2x" aria-hidden="true"></i>
          </a>
          <a class="dribble" href="#">
              <i class="fab fa-dribbble fa-lg white-text mr-md-5 mr-3 fa-2x" aria-hidden="true"></i>
          </a>
        </div>
            
      <p class="copyright">Made with <i class="fa fa-heart pulse"></i> © 2021</p>
    </footer>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.phone-viewport {
      bottom: 0;
      width: 100%;
      line-height: 10px;
      overflow: hidden;
      text-align: center;
      right: 0;
      left: 0;
      background-repeat: no-repeat;
      z-index: 1111;
  }
  .copyright {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    color: rgba(0,0,0,.5);
    font-weight: bold;
  }
.social{
  margin-top: 10px;
  text-align: center;
}
.social a{
  margin-right: 20px;
  color: #000
}


.social a.facebook:hover{
  color:#3b5998
 
}

.social a.twitter:hover{
  color:#00aced
 
}

.social a.linkedin:hover{
  color:#007bb6
 
}

.social a.dribble:hover{
  color:#ea4c89
 
}
</style>