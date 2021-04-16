<template>
    <div>
        <nav>
            <div class="container">
                <router-link to="/" id="brand">Reports</router-link>
                <router-link to="/add" id="report"><strong>Add Report</strong></router-link></li>
                
            </div>
        </nav>
    </div>
</template>


<style lang="scss" scoped>
.container{
    width: 80%;
    margin: 0 auto;
    clear: both;
}

a{
    display: inline-block;
    color: #333;
    text-decoration: none;
}

nav{
    background: #fff;
    height: 80px;
    line-height: 80px;
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 9998;
    transition: all 0.5;
}
#brand{
    text-transform: uppercase;
    float: left;
    font-weight:800;
    font-size: 20px;
}
#report{
    float: right;
}

</style>