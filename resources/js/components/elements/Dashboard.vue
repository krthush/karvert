<template>
  <div class="row border-between">
    <div class="col-md-3">
      <div class="container-fluid mr-4">
        <div>
          <h1 class="my-4">Adverts:</h1>
        </div>
        <div class="list-group">
          <a href="#" class="list-group-item list-group-item-action flex-column align-items-start active">
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1">Basic watch image</h5>
              <small>01/02/2020</small>
            </div>
          </a>
          <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1">emit Coupon Giveaway</h5>
              <small class="text-muted">04/02/2020</small>
            </div>
          </a>
          <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1">buy Call to action</h5>
              <small class="text-muted">07/02/2020</small>
            </div>
          </a>
        </div>
        <a class="float-right my-4 mx-2" href="#">Create Advert</a>        
      </div>
    </div>
    <div class="col-md-9">
      <div class="container-fluid mx-4">
        <div>
          <h1 class="my-4">Analytics:</h1>  
        </div>        
      </div>
    </div>      
  </div>
</template>

<style>
.border-between > [class*='col-']:before {
   background: #e3e3e3;
   bottom: 0;
   content: " ";
   left: 0;
   position: absolute;
   width: 1px;
   top: 0;
}

.border-between > [class*='col-']:first-child:before {
   display: none;
}
</style>