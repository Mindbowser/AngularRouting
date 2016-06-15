myApp.controller("aboutController",['$scope','$rootScope','$localStorage',function($scope,$rootScope,$localStorage) {
    
    toastr.options.showMethod = 'slideDown';
											toastr.options.hideMethod = 'slideUp';
											toastr.options.closeMethod = 'slideUp';
    
    $rootScope.headerName="About"
    $scope.ok=true;
    $scope.cancel=false;
    //$scope.imageShow=false;
    $scope.imageArray=[
                    'img/1.jpg',
                    'img/2.jpg',
                    'img/3.jpg',  
                     'img/4.jpg',
                        'img/5.jpg',
                        'img/6.jpg',
                        'img/7.jpg',
                        'img/8.jpg',
                        'img/9.jpg',
                        'img/10.jpg',
                        'img/11.jpg',
                        'img/12.jpeg',
                        'img/13.jpg',
                        'img/14.jpg',
                        'img/15.jpg',
                        'img/16.jpg'

                      ];
    $scope.isImageSelected=function(image){
        var flag=0
   angular.forEach($scope.selectedImagesArray, function(value, key) {
         if(value==image) {
                flag=1;
                return flag;
            }             
                
     });     
        
            if(flag)
                return flag;
            else
                return flag;
                        
    }
    
    if($localStorage.localSelectedImageArray!=undefined)
        {
           
    $scope.selectedImagesArray=$localStorage.localSelectedImageArray;
        if($scope.isImageSelected($scope.imageArray[0]))
            {
            $scope.ok=false;
            $scope.cancel=true;    
            }
        else
            {
                $scope.ok=true;
            $scope.cancel=false;
            }    
            }
    
    $scope.isActive=0;
    $scope.currentImageIndex=0;
    $scope.showPreviousImage=function(){
        console.log($scope.currentImageIndex)
        console.log($scope.imageArray.length)
        if($scope.currentImageIndex!=0)
        if($scope.isImageSelected($scope.imageArray[$scope.currentImageIndex-1]))
            {
            $scope.ok=false;
            $scope.cancel=true;    
            }
        else
            {
                $scope.ok=true;
            $scope.cancel=false;
            }
        if($scope.currentImageIndex!=0){
        $scope.imagePath=$scope.imageArray[$scope.currentImageIndex-1];
        $scope.currentImageIndex=$scope.currentImageIndex-1;
            }
        
    }
    $scope.showNextImage=function(){
        console.log($scope.currentImageIndex)
        console.log($scope.imageArray.length)
        if($scope.isImageSelected($scope.imageArray[$scope.currentImageIndex+1]))
            {
            $scope.ok=false;
            $scope.cancel=true;    
            }
        else
            {
                $scope.ok=true;
            $scope.cancel=false;
            }
        if($scope.currentImageIndex+1!=$scope.imageArray.length)
            {
        $scope.imagePath=$scope.imageArray[$scope.currentImageIndex+1];
        $scope.currentImageIndex=$scope.currentImageIndex+1;
                }
    }
        $scope.imagePath=$scope.imageArray[0];
    $scope.setImage=function(image,index){
        if($scope.isImageSelected(image))
            {
                
            $scope.ok=false;
            $scope.cancel=true;    
            }
        else
            {
            $scope.ok=true;
            $scope.cancel=false;
            }
        $scope.imagePath=image;
        $scope.currentImageIndex=index;
        $scope.isActive=index;
        
        //$scope.imageShow=true;
    }
    //$scope.selectedImagesArray=[];
    $scope.selectImage=function(image){
        if($scope.isImageSelected(image))
            {
                
            $scope.ok=false;
            $scope.cancel=true;    
            }
        else
            {
            $scope.ok=true;
            $scope.cancel=false;
            }
        $scope.flag=1;
        if($scope.selectedImagesArray.length==0)
            {
                $scope.ok=false;
            $scope.cancel=true;
                toastr.remove();    
                toastr
					.success("image Added ");
                $scope.selectedImagesArray.push(image)
                $localStorage.localSelectedImageArray=$scope.selectedImagesArray;
                
                
            }
        
        else{
        angular.forEach($scope.selectedImagesArray, function(value, key) {
            if(value==image)   
    {
                             var index = $scope.selectedImagesArray.indexOf(image);//find the index of player record
		                     $scope.selectedImagesArray.splice(index,1)
                             $localStorage.localSelectedImageArray=$scope.selectedImagesArray;
                             toastr.remove();
        
                             toastr
					.info("image Removed");
                            // alert('image Removed'+index)
                             $scope.flag=0
                             $scope.ok=true;
            $scope.cancel=false;
                             
     }               
                
});          if($scope.flag)
            {
                $scope.ok=false;
            $scope.cancel=true;
                   toastr.remove();             
                toastr.success("image Added");
                $scope.selectedImagesArray.push(image)
                $localStorage.localSelectedImageArray=$scope.selectedImagesArray;
                
            }
            
        }
        
        
        
    }
    
        
    
}])