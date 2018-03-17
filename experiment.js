

var thehammer,cube2;
var orbitcam, clock;
var theball, ballradius, ballmass, ballvelocity;
var thefloor, pole;
var theboundary;
var fric;
var velpanel, font, thevel, heading;
var hitonce, counter;
var x, y, z, theta, x1, z1;
var mew_friction;
var kl = 1;
var xval=-3.5,yval=0.9,zval=2,yvalbox=-4.5,stringy=-2.8,yvalspring=-1.70;
var xval2=1.5,yval2=-3,zval2=2;
var endx=-1,endy=0.6,endz=0;
var v=0,topstring=-1;
var line,line4,line3,line5,line6;
var cube3,fr=1,text4;
var arrowHelperfr,arrowHelperT;
var stars,spring,tension=0;
var length1=1.5,length2=1;
var change=1,ttext,t3,t1,t0,t6,block1;
var t2;
var text2,deletemass2=1;
var invert_mass_checker=1;
var notif;
var conclude1,conclude3,conclude4,conclude2,conclude5,conclude6;
var blue,yellow,red,green;
var redtext;
var geometry; 
var materialFront1;
var materialArray1;
var materialSide1;
var gem;
var gem1=1;
var fbd1,fbd2,nline,nliney;
var cubeMaterial;
var area,texttest,texttest2;
// function test(){
//     PIEstartAnimation();
//     PIEstopAnimation();
// }
//does what it says

var plane;
var basic;
var perimeter;
var t0;
var pos=1;
var c=1;
var line;
var score=0;
var result;
var rope;
var tri_1,tri_2,tri_3;
var quad_1,quad_2,quad_3,quad_4;
var pent_1,pent_2,pent_3,pent_4,pent_5;
var hex_1,hex_2,hex_3,hex_4,hex_5,hex_6;
var n;
var score_display,score_number,q1,q2,l1,l2,info1,info2;
var plane1,plane2,plane3;
function initialiseScene(){
   
    
// b3003b
// var choice3= (Math.floor(Math.random()*10));

var geometry = new THREE.PlaneGeometry( 8, 15, 0 );
var material = new THREE.MeshBasicMaterial( {color: 0xe8f7ee, side: THREE.DoubleSide} );
plane1 = new THREE.Mesh( geometry, material );
plane1.position.set(11,0,-1);
PIEaddElement(plane1);

var geometry = new THREE.PlaneGeometry( 8, 15, 0 );
var material = new THREE.MeshBasicMaterial( {color: 0xe8f7ee, side: THREE.DoubleSide} );
plane2 = new THREE.Mesh( geometry, material );
plane2.position.set(-10.8,0,-1);
PIEaddElement(plane2);


var geometry = new THREE.PlaneGeometry( 25, 3 , 0 );
var material = new THREE.MeshBasicMaterial( {color: 0x3d5c5c, side: THREE.DoubleSide} );
plane3 = new THREE.Mesh( geometry, material );
plane3.position.set(0,-7,-1);
PIEaddElement(plane3);

    // geometry = new THREE.PlaneGeometry(4.5,0.7);
    // yellow=createMesh(geometry,"yellow.png");
    // yellow.position.set(-9.2,5.4,-2);
    // PIEaddElement( yellow );
    

PIErender();

            var materialSide = new THREE.MeshBasicMaterial( { color: 0xf9dacf} );
            var materialArray = [materialSide ];
            var loader = new THREE.FontLoader();

             loader.load( 'optimer_bold.typeface.js', function ( font ) {
                
                var textGeom = new THREE.TextGeometry("Click Next to Start The Quiz", 
                {
                    size: 0.5, height: 0,
                    font: font, weight: "normal", style: "normal"
                });  
            var textMaterial = new THREE.MeshBasicMaterial(materialSide);
                plane = new THREE.Mesh(textGeom, textMaterial );
                plane.position.set(-5,0,0);
                
                PIEaddElement(plane);
                plane.visible=true;
                
                // PIEdragElement(textMesh1);
                // PIEsetDrag(textMesh1,myMainDrag);
                // PIEsetDragEnd(textMesh1,myTwoEnd);
                PIErender();
            });


            var materialSi = new THREE.MeshBasicMaterial( { color: 0x000000} );
            var materialAr = [materialSi ];
            var loader = new THREE.FontLoader();

             loader.load( 'optimer_bold.typeface.js', function ( font ) {
                
                var textGeom = new THREE.TextGeometry("All values are in meters (m)", 
                {
                    size: 0.2, height: 0,
                    font: font, weight: "normal", style: "normal"
                });  
            var textMaterial = new THREE.MeshBasicMaterial(materialSi);
                basic= new THREE.Mesh(textGeom, textMaterial );
                basic.position.set(-12,5,0);
                
                PIEaddElement(basic);
                // q2.visible=false;
                
                // PIEdragElement(textMesh1);
                // PIEsetDrag(textMesh1,myMainDrag);
                // PIEsetDragEnd(textMesh1,myTwoEnd);
                PIErender();
            });





}
function handleChange(row, col, value)
{
    /* Set current Table to Copy Table */
    PIEtableSelect("Copy Table");
    /* copy cell content to Copy Table */
    PIEupdateTableCell(row, col, value);
}


function loadExperimentElements(){
    var loader, tex, material, geometry;

    PIEsetExperimentTitle("PERIMETER OF IRREGULAR POLYGONS");
    PIEsetDeveloperName("Anuroop Gubbala");
    //PIEhideControlElement();
    initialiseHelp();
    initialiseInfo();
    initialiseControls();
    initialiseScene();

  
    PIEsetAreaOfInterest(-7, 7, 7, -7);
    // PIEscene.background=new THREE.Color( 0xffa64d );
    PIEscene.background=new THREE.Color(0x23231a);

            // var materialSi = new THREE.MeshBasicMaterial( { color: 0xffffff} );
            // var materialAr = [materialSi ];
            // var loader = new THREE.FontLoader();

            //  loader.load( 'optimer_bold.typeface.js', function ( font ) {
                
            //     var textGeom = new THREE.TextGeometry("All values are in meters (m)", 
            //     {
            //         size: 0.2, height: 0,
            //         font: font, weight: "normal", style: "normal"
            //     });  
            // var textMaterial = new THREE.MeshBasicMaterial(materialSi);
            //     basic= new THREE.Mesh(textGeom, textMaterial );
            //     basic.position.set(-10,5,0);
                
            //     PIEaddElement(basic);
            //     // q2.visible=false;
                
            //     // PIEdragElement(textMesh1);
            //     // PIEsetDrag(textMesh1,myMainDrag);
            //     // PIEsetDragEnd(textMesh1,myTwoEnd);
            //     PIErender();
            // });



            var materialSide6 = new THREE.MeshBasicMaterial( { color: 0xf9dacf} );
            var materialArray = [materialSide6 ];
            var loader = new THREE.FontLoader();

             loader.load( 'optimer_bold.typeface.js', function ( font ) {
                
                var textGeom = new THREE.TextGeometry("Enter the Perimeter of the given boundary!", 
                {
                    size: 0.5, height: 0,
                    font: font, weight: "normal", style: "normal"
                });  
            var textMaterial = new THREE.MeshBasicMaterial(materialSide6);
                q1 = new THREE.Mesh(textGeom, textMaterial );
                q1.position.set(-6,-6.4,0);
                
                PIEaddElement(q1);
                q1.visible=false;
                
                // PIEdragElement(textMesh1);
                // PIEsetDrag(textMesh1,myMainDrag);
                // PIEsetDragEnd(textMesh1,myTwoEnd);
                PIErender();
            });


            var materialSide15 = new THREE.MeshBasicMaterial( { color: 0xf9dacf} );
            var materialArray = [materialSide15 ];
            var loader = new THREE.FontLoader();

             loader.load( 'optimer_bold.typeface.js', function ( font ) {
                
                var textGeom = new THREE.TextGeometry("How much rope will be left after laying it around the given boundary?", 
                {
                    size: 0.5, height: 0,
                    font: font, weight: "normal", style: "normal"
                });  
            var textMaterial = new THREE.MeshBasicMaterial(materialSide15);
                rope = new THREE.Mesh(textGeom, textMaterial );
                rope.position.set(-11,-6.4,0);
                
                PIEaddElement(rope);
                rope.visible=false;
                
                // PIEdragElement(textMesh1);
                // PIEsetDrag(textMesh1,myMainDrag);
                // PIEsetDragEnd(textMesh1,myTwoEnd);
                PIErender();
            });


            var materialS = new THREE.MeshBasicMaterial( { color: 0x0066ff} );
            var materialA = [materialSide ];
            var loader = new THREE.FontLoader();

             loader.load( 'optimer_bold.typeface.js', function ( font ) {
                
                var textGeom = new THREE.TextGeometry("Rope Length = 90 ", 
                {
                    size: 0.35, height: 0,
                    font: font, weight: "normal", style: "normal"
                });  
            var textMaterial = new THREE.MeshBasicMaterial(materialS);
                q2 = new THREE.Mesh(textGeom, textMaterial );
                q2.position.set(-12,1.5,0);
                
                PIEaddElement(q2);
                q2.visible=false;
                
                // PIEdragElement(textMesh1);
                // PIEsetDrag(textMesh1,myMainDrag);
                // PIEsetDragEnd(textMesh1,myTwoEnd);
                PIErender();
            });

             var materialSide2 = new THREE.MeshBasicMaterial( { color: 0x333300} );
            var materialArray2 = [materialSide ];
            var loader = new THREE.FontLoader();

             loader.load( 'optimer_bold.typeface.js', function ( font ) {
                
                var textGeom = new THREE.TextGeometry("Level 2", 
                {
                    size: 0.5, height: 0,
                    font: font, weight: "normal", style: "normal"
                });  
            var textMaterial = new THREE.MeshBasicMaterial(materialSide2);
                l2 = new THREE.Mesh(textGeom, textMaterial );
                l2.position.set(-11,3,0);
                
                PIEaddElement(l2);
                l2.visible=false;
                
                // PIEdragElement(textMesh1);
                // PIEsetDrag(textMesh1,myMainDrag);
                // PIEsetDragEnd(textMesh1,myTwoEnd);
                PIErender();
            });

            var materialSide1 = new THREE.MeshBasicMaterial( { color: 0x333300} );
            var materialArray1 = [materialSide1 ];
            var loader = new THREE.FontLoader();

             loader.load( 'optimer_bold.typeface.js', function ( font ) {
                
                var textGeom = new THREE.TextGeometry("Level 1", 
                {
                    size: 0.5, height: 0,
                    font: font, weight: "normal", style: "normal"
                });  
            var textMaterial = new THREE.MeshBasicMaterial(materialSide1);
                l1 = new THREE.Mesh(textGeom, textMaterial );
                l1.position.set(-10,3,0);
                
                PIEaddElement(l1);
                l1.visible=false;
                
                // PIEdragElement(textMesh1);
                // PIEsetDrag(textMesh1,myMainDrag);
                // PIEsetDragEnd(textMesh1,myTwoEnd);
                PIErender();
            });



            var materialSide3 = new THREE.MeshBasicMaterial( { color: 0x000000} );
            var materialArray3 = [materialSide3];
            var loader = new THREE.FontLoader();

             loader.load( 'optimer_bold.typeface.js', function ( font ) {
                
                var textGeom = new THREE.TextGeometry("Answer", 
                {
                    size: 0.2, height: 0,
                    font: font, weight: "normal", style: "normal"
                });  
            var textMaterial = new THREE.MeshBasicMaterial(materialSide3);
                info1 = new THREE.Mesh(textGeom, textMaterial );
                info1.position.set(-10,2,0);
                
                PIEaddElement(info1);
                info1.visible=false;
                
                // PIEdragElement(textMesh1);
                // PIEsetDrag(textMesh1,myMainDrag);
                // PIEsetDragEnd(textMesh1,myTwoEnd);
                PIErender();
            });

            var materialSide3 = new THREE.MeshBasicMaterial( { color: 0x000000} );
            var materialArray3 = [materialSide3];
            var loader = new THREE.FontLoader();

             loader.load( 'optimer_bold.typeface.js', function ( font ) {
                
                var textGeom = new THREE.TextGeometry(" 5 questions correctly in a row for level 2", 
                {
                    size: 0.2, height: 0,
                    font: font, weight: "normal", style: "normal"
                });  
            var textMaterial = new THREE.MeshBasicMaterial(materialSide3);
                info3 = new THREE.Mesh(textGeom, textMaterial );
                info3.position.set(-12,1.5,0);
                
                PIEaddElement(info3);
                info3.visible=false;
                
                // PIEdragElement(textMesh1);
                // PIEsetDrag(textMesh1,myMainDrag);
                // PIEsetDragEnd(textMesh1,myTwoEnd);
                PIErender();
            });

            var materialSide4 = new THREE.MeshBasicMaterial( { color: 0x000000} );
            var materialArray4 = [materialSide4 ];
            var loader = new THREE.FontLoader();

             loader.load( 'optimer_bold.typeface.js', function ( font ) {
                
                var textGeom = new THREE.TextGeometry("Answer 5 questions correctly in a row  to win", 
                {
                    size: 0.2, height: 0,
                    font: font, weight: "normal", style: "normal"
                });  
            var textMaterial = new THREE.MeshBasicMaterial(materialSide4);
                info2 = new THREE.Mesh(textGeom, textMaterial );
                info2.position.set(-12.6,2,0);
                
                PIEaddElement(info2);
                info2.visible=false;
                
                // PIEdragElement(textMesh1);
                // PIEsetDrag(textMesh1,myMainDrag);
                // PIEsetDragEnd(textMesh1,myTwoEnd);
                PIErender();
            });


            var materialSide = new THREE.MeshBasicMaterial( { color: 0x000000} );
            var materialArray = [materialSide ];
            var loader = new THREE.FontLoader();

             loader.load( 'optimer_bold.typeface.js', function ( font ) {
                
                var textGeom = new THREE.TextGeometry("Your Score:", 
                {
                    size: 0.2, height: 0,
                    font: font, weight: "normal", style: "normal"
                });  
            var textMaterial = new THREE.MeshBasicMaterial(materialSide);
                score_display = new THREE.Mesh(textGeom, textMaterial );
                score_display.position.set(8,1,0);
                
                PIEaddElement(score_display);
                // q2.visible=false;
                
                // PIEdragElement(textMesh1);
                // PIEsetDrag(textMesh1,myMainDrag);
                // PIEsetDragEnd(textMesh1,myTwoEnd);
                PIErender();
            });


            var materialSide = new THREE.MeshBasicMaterial( { color: 0x000000} );
            var materialArray = [materialSide ];
            var loader = new THREE.FontLoader();

             loader.load( 'optimer_bold.typeface.js', function ( font ) {
                
                var textGeom = new THREE.TextGeometry("Click Next", 
                {
                    size: 0.2, height: 0,
                    font: font, weight: "normal", style: "normal"
                });  
            var textMaterial = new THREE.MeshBasicMaterial(materialSide);
                n = new THREE.Mesh(textGeom, textMaterial );
                n.position.set(8,0,0);
                
                PIEaddElement(n);
                // q2.visible=false;
                n.visible=false;
                
                // PIEdragElement(textMesh1);
                // PIEsetDrag(textMesh1,myMainDrag);
                // PIEsetDragEnd(textMesh1,myTwoEnd);
                PIErender();
            });


    PIErender();

    
}



function createMesh(geom, imageFile) {
       var texture = new THREE.TextureLoader().load(imageFile);
       var mat = new THREE.MeshBasicMaterial();
       mat.map = texture;
       mat.transparent = true;
       mat.map.needsUpdate = true;
       var mesh = new THREE.Mesh(geom, mat);PIErender();
       PIErender();
       return mesh;

}


function updateExperimentElements(t, dt)
        {       
            PIEstopAnimation();

            // PIEremoveElement(nline);
               	// var time  = t/1000;

               	// if(time >= 2&&kl==1){
                //     PIEstopAnimation();
                //     kl=0;
                // }

                // if(kl == 0){


                // }

        }

//orbit control config
function camnotify(){
    if(orbitcam.enabled){
        PIEchangeDisplayCheckbox("Camera Control", false);
        orbitcam.enabled=false;
    }
    else{
        orbitcam.enabled=true;
        PIEchangeDisplayCheckbox("Camera Control", true);
    }
}





function PIEremoveElement(b){
    var a;
    var c;
    PIEscene.remove(b);
    c=false;
    for(a=PIEsceneElements.length-1;(c==false)&&(a>=0);a--)
        {if(b==PIEsceneElements[a]){while(a<PIEsceneElements.length-1){
            PIEsceneElements[a]=PIEsceneElements[a+1];a++}PIEsceneElements.pop();c=true

            }
        }

    }


function next(){

PIEremoveElement(result);


// PIEremoveElement(plane);

PIEremoveElement(t0);
PIEremoveElement(tri_1);
PIEremoveElement(tri_2);
PIEremoveElement(tri_3);

PIEremoveElement(quad_1);
PIEremoveElement(quad_2);
PIEremoveElement(quad_3);
PIEremoveElement(quad_4);


PIEremoveElement(pent_1);
PIEremoveElement(pent_2);
PIEremoveElement(pent_3);
PIEremoveElement(pent_4);
PIEremoveElement(pent_5);


PIEremoveElement(hex_1);
PIEremoveElement(hex_2);
PIEremoveElement(hex_3);
PIEremoveElement(hex_4);
PIEremoveElement(hex_5);
PIEremoveElement(hex_6);

PIEremoveElement(score_number);

PIEremoveElement(line);


n.visible=false;

if(score==10){
    score=0;
    resetExperiment();
}else{


if(score<5){

    l1.visible=true;
    q1.visible=true;
    info1.visible=true;
    info3.visible=true;
    l2.visible=false;
    q2.visible=false;
    info2.visible=false;
    rope.visible=false;
}

if(score>=5){

    l2.visible=true;
    q2.visible=true;
    info2.visible=true;
    rope.visible=true;
    l1.visible=false;
    q1.visible=false;
    info1.visible=false;
    info3.visible=false;
}
            
 var materialSide9 = new THREE.MeshBasicMaterial( { color: 0x000000} );
            var materialArray = [materialSide9 ];
            var loader = new THREE.FontLoader();

             loader.load( 'optimer_bold.typeface.js', function ( font ) {
                
                var textGeom = new THREE.TextGeometry(score, 
                {
                    size: 0.2, height: 0,
                    font: font, weight: "normal", style: "normal"
                });  
            var textMaterial = new THREE.MeshBasicMaterial(materialSide9);
                score_number = new THREE.Mesh(textGeom, textMaterial );
                score_number.position.set(10,1,0);
                
                PIEaddElement(score_number);
                // q2.visible=false;
                
                // PIEdragElement(textMesh1);
                // PIEsetDrag(textMesh1,myMainDrag);
                // PIEsetDragEnd(textMesh1,myTwoEnd);
                PIErender();
            });



var choice= (Math.floor(Math.random()*5)+1);


            // var materialSide = new THREE.MeshBasicMaterial( { color: 0xf9dacf} );
            // var materialArray = [materialSide ];
            // var loader = new THREE.FontLoader();

            //  loader.load( 'optimer_bold.typeface.js', function ( font ) {
                
            //     var textGeom = new THREE.TextGeometry(choice, 
            //     {
            //         size: 0.2, height: 0,
            //         font: font, weight: "normal", style: "normal"
            //     });  
            // var textMaterial = new THREE.MeshBasicMaterial(materialSide);
            //     t0 = new THREE.Mesh(textGeom, textMaterial );
            //     t0.position.set(4,5,0);
                
            //     PIEaddElement(t0);
                
            //     // PIEdragElement(textMesh1);
            //     // PIEsetDrag(textMesh1,myMainDrag);
            //     // PIEsetDragEnd(textMesh1,myTwoEnd);
            //     PIErender();
            // });


    if(choice==3){   PIEremoveElement(plane);   
    
                var x = 0, y = 0;

                var heartShape = new THREE.Shape();
                var choice1= (Math.floor(Math.random()*2)+1);
                var choice2= (Math.floor(Math.random()*2)+1);
                var choice3= (Math.floor(Math.random()*2)+1);
                var choice4= (Math.floor(Math.random()*2)+1);
                var choice5= (Math.floor(Math.random()*2)+1);
                var choice6= (Math.floor(Math.random()*2)+1);
                heartShape.moveTo(choice1,5-choice1);
                heartShape.lineTo(-5,0+choice2);
                heartShape.lineTo(-3,-4+choice4);
                heartShape.lineTo(1,-5+choice5);
                heartShape.lineTo(3+choice1,1+choice6);
                heartShape.lineTo(choice1,5-choice1);
                var geometry = new THREE.ShapeGeometry( heartShape );
                var material = new THREE.MeshBasicMaterial( { color: 0xFF6A00 } );
                plane = new THREE.Mesh( geometry, material ) ;
                PIEaddElement( plane );

                var edges = new THREE.EdgesGeometry( geometry );
                line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0xffffff } ) );
                PIEaddElement( line );


                
                
                var choice10= (Math.floor(Math.random()*5)+1);
                var side1=6+choice10;
                var side2=5+choice10;
                var side3=4+choice10;
                var side4=9+choice10;
                var side5=3+choice10;
                perimeter=side1+side2+side3+side4+side5;


                                    var materialSide = new THREE.MeshBasicMaterial( { color: 0xf9dacf} );
                                    var materialArray = [materialSide ];
                                    var loader = new THREE.FontLoader();

                                     loader.load( 'optimer_bold.typeface.js', function ( font ) {
                                        
                                        var textGeom = new THREE.TextGeometry(side1, 
                                        {
                                            size: 0.2, height: 0,
                                            font: font, weight: "normal", style: "normal"
                                        });  
                                    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
                                        pent_1 = new THREE.Mesh(textGeom, textMaterial );
                                        pent_1.position.set(((choice1-5)/2),((5-choice1+choice2)/2)+0.5,0);
                                        
                                        PIEaddElement(pent_1);
                                        
                                        // PIEdragElement(textMesh1);
                                        // PIEsetDrag(textMesh1,myMainDrag);
                                        // PIEsetDragEnd(textMesh1,myTwoEnd);
                                        PIErender();
                                    });


                                    loader.load( 'optimer_bold.typeface.js', function ( font ) {
                                        
                                        var textGeom = new THREE.TextGeometry(side2, 
                                        {
                                            size: 0.2, height: 0,
                                            font: font, weight: "normal", style: "normal"
                                        });  
                                    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
                                        pent_2= new THREE.Mesh(textGeom, textMaterial );
                                        pent_2.position.set(-4.5,((-4+choice4+choice2)/2)-0.5,0);
                                        
                                        PIEaddElement(pent_2);
                                        
                                        // PIEdragElement(textMesh1);
                                        // PIEsetDrag(textMesh1,myMainDrag);
                                        // PIEsetDragEnd(textMesh1,myTwoEnd);
                                        PIErender();
                                    });

                                    loader.load( 'optimer_bold.typeface.js', function ( font ) {
                                        
                                        var textGeom = new THREE.TextGeometry(side3, 
                                        {
                                            size: 0.2, height: 0,
                                            font: font, weight: "normal", style: "normal"
                                        });  
                                    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
                                        pent_3 = new THREE.Mesh(textGeom, textMaterial );
                                        pent_3.position.set(-1,((-9+choice4+choice5)/2)-0.5,0);
                                        
                                        PIEaddElement(pent_3);
                                        
                                        // PIEdragElement(textMesh1);
                                        // PIEsetDrag(textMesh1,myMainDrag);
                                        // PIEsetDragEnd(textMesh1,myTwoEnd);
                                        PIErender();
                                    });

                                    loader.load( 'optimer_bold.typeface.js', function ( font ) {
                                        
                                        var textGeom = new THREE.TextGeometry(side4, 
                                        {
                                            size: 0.2, height: 0,
                                            font: font, weight: "normal", style: "normal"
                                        });  
                                    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
                                        pent_4 = new THREE.Mesh(textGeom, textMaterial );
                                        pent_4.position.set((4+choice1)/2 +0.5,((-4+choice5+choice6)/2),0);
                                        
                                        PIEaddElement(pent_4);
                                        
                                        // PIEdragElement(textMesh1);
                                        // PIEsetDrag(textMesh1,myMainDrag);
                                        // PIEsetDragEnd(textMesh1,myTwoEnd);
                                        PIErender();
                                    });

                                    loader.load( 'optimer_bold.typeface.js', function ( font ) {
                                        
                                        var textGeom = new THREE.TextGeometry(side5, 
                                        {
                                            size: 0.2, height: 0,
                                            font: font, weight: "normal", style: "normal"
                                        });  
                                    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
                                        pent_5 = new THREE.Mesh(textGeom, textMaterial );
                                        pent_5.position.set((3+(2*choice1))/2,((6-choice1+choice6)/2)+0.5,0);
                                        
                                        PIEaddElement(pent_5);
                                        
                                        // PIEdragElement(textMesh1);
                                        // PIEsetDrag(textMesh1,myMainDrag);
                                        // PIEsetDragEnd(textMesh1,myTwoEnd);
                                        PIErender();
                                    });



            
            // var materialSide = new THREE.MeshBasicMaterial( { color: 0xf9dacf} );
            // var materialArray = [materialSide ];
            // var loader = new THREE.FontLoader();

            //  loader.load( 'optimer_bold.typeface.js', function ( font ) {
                
            //     var textGeom = new THREE.TextGeometry(choice3, 
            //     {
            //         size: 0.2, height: 0,
            //         font: font, weight: "normal", style: "normal"
            //     });  
            // var textMaterial = new THREE.MeshBasicMaterial(materialSide);
            //     t0 = new THREE.Mesh(textGeom, textMaterial );
            //     t0.position.set(4,5,0);
                
            //     PIEaddElement(t0);
                
                // PIEdragElement(textMesh1);
                // PIEsetDrag(textMesh1,myMainDrag);
                // PIEsetDragEnd(textMesh1,myTwoEnd);
            //     PIErender();
            // });



            
}else if(choice==1){

            PIEremoveElement(plane);
            
            var choice10= (Math.floor(Math.random()*2)+1);
            


        var x = 0, y = 0;

        var heartShape = new THREE.Shape();
        var choice1= (Math.floor(Math.random()*2)+1);
        var choice2= (Math.floor(Math.random()*2)+1);
        var choice3= (Math.floor(Math.random()*2)+1);
        var choice4= (Math.floor(Math.random()*2)+1);
        var choice5= (Math.floor(Math.random()*2)+1);
        var choice6= (Math.floor(Math.random()*2)+1);
        heartShape.moveTo(-5,-1);
        heartShape.lineTo(1+choice2,-choice3);
        heartShape.lineTo(5-choice1,4-choice6);
        // heartShape.lineTo(0,4-choice1);
        heartShape.lineTo(-5,-1);

        
        var choice10= (Math.floor(Math.random()*5)+1);
        var side1=6+choice10;
        var side2=4+choice10;
        var side3=10+choice10;
        perimeter=side1+side2+side3;

        
            var materialSide = new THREE.MeshBasicMaterial( { color: 0xf9dacf} );
            var materialArray = [materialSide ];
            var loader = new THREE.FontLoader();

             loader.load( 'optimer_bold.typeface.js', function ( font ) {
                
                var textGeom = new THREE.TextGeometry(side1, 
                {
                    size: 0.2, height: 0,
                    font: font, weight: "normal", style: "normal"
                });  
            var textMaterial = new THREE.MeshBasicMaterial(materialSide);
                tri_1 = new THREE.Mesh(textGeom, textMaterial );
                tri_1.position.set((-4+choice2)/2 -0.2,((-1-choice3)/2)-0.5,0);
                
                PIEaddElement(tri_1);
                
                // PIEdragElement(textMesh1);
                // PIEsetDrag(textMesh1,myMainDrag);
                // PIEsetDragEnd(textMesh1,myTwoEnd);
                PIErender();
            });


            loader.load( 'optimer_bold.typeface.js', function ( font ) {
                
                var textGeom = new THREE.TextGeometry(side2, 
                {
                    size: 0.2, height: 0,
                    font: font, weight: "normal", style: "normal"
                });  
            var textMaterial = new THREE.MeshBasicMaterial(materialSide);
                tri_2 = new THREE.Mesh(textGeom, textMaterial );
                tri_2.position.set((6-choice1+choice2)/2 + 0.2,((4-choice3-choice6)/2)-0.5,0);
                
                PIEaddElement(tri_2);
                
                // PIEdragElement(textMesh1);
                // PIEsetDrag(textMesh1,myMainDrag);
                // PIEsetDragEnd(textMesh1,myTwoEnd);
                PIErender();
            });

            loader.load( 'optimer_bold.typeface.js', function ( font ) {
                
                var textGeom = new THREE.TextGeometry(side3, 
                {
                    size: 0.2, height: 0,
                    font: font, weight: "normal", style: "normal"
                });  
            var textMaterial = new THREE.MeshBasicMaterial(materialSide);
                tri_3 = new THREE.Mesh(textGeom, textMaterial );
                tri_3.position.set(-0.5,((3-choice6)/2)+0.5,0);
                
                PIEaddElement(tri_3);
                
                // PIEdragElement(textMesh1);
                // PIEsetDrag(textMesh1,myMainDrag);
                // PIEsetDragEnd(textMesh1,myTwoEnd);
                PIErender();
            });


        var geometry = new THREE.ShapeGeometry( heartShape );
        var material = new THREE.MeshBasicMaterial( { color: 0xFF6A00 } );
        plane = new THREE.Mesh( geometry, material ) ;
        PIEaddElement( plane );
        var edges = new THREE.EdgesGeometry( geometry );
        line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0xffffff } ) );
        PIEaddElement( line );


            PIErender();

             
   

    }else  if(choice==2){
        

                                    PIEremoveElement(plane);
                                    var choice10= (Math.floor(Math.random()*5)+1);

                                    if(c==1){
                                    var x = 0, y = 0;

                                    var heartShape = new THREE.Shape();
                                    var choice1= (Math.floor(Math.random()*2)+1);
                                    var choice2= (Math.floor(Math.random()*2)+1);
                                    var choice3= (Math.floor(Math.random()*2)+1);
                                    var choice4= (Math.floor(Math.random()*2)+1);
                                    var choice5= (Math.floor(Math.random()*2)+1);
                                    var choice6= (Math.floor(Math.random()*2)+1);
                                    heartShape.moveTo(-3,-3);
                                    heartShape.lineTo(1,-choice3);
                                    heartShape.lineTo(5,4-choice6);
                                    heartShape.lineTo(0,4-choice1);
                                    heartShape.lineTo(-3,-3);
                                    
                                    var choice10= (Math.floor(Math.random()*5)+1);
                                    var side1=5+choice10;
                                    var side2=7+choice10;
                                    var side3=5.5+choice10;
                                    var side4=6+choice10;
                                    perimeter=side1+side2+side3+side4;

                                
                                    var materialSide = new THREE.MeshBasicMaterial( { color: 0xf9dacf} );
                                    var materialArray = [materialSide ];
                                    var loader = new THREE.FontLoader();

                                     loader.load( 'optimer_bold.typeface.js', function ( font ) {
                                        
                                        var textGeom = new THREE.TextGeometry(side1, 
                                        {
                                            size: 0.2, height: 0,
                                            font: font, weight: "normal", style: "normal"
                                        });  
                                    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
                                        quad_1 = new THREE.Mesh(textGeom, textMaterial );
                                        quad_1.position.set(-1,((-3-choice3)/2)-0.5,0);
                                        
                                        PIEaddElement(quad_1);
                                        
                                        // PIEdragElement(textMesh1);
                                        // PIEsetDrag(textMesh1,myMainDrag);
                                        // PIEsetDragEnd(textMesh1,myTwoEnd);
                                        PIErender();
                                    });


                                    loader.load( 'optimer_bold.typeface.js', function ( font ) {
                                        
                                        var textGeom = new THREE.TextGeometry(side2, 
                                        {
                                            size: 0.2, height: 0,
                                            font: font, weight: "normal", style: "normal"
                                        });  
                                    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
                                        quad_2= new THREE.Mesh(textGeom, textMaterial );
                                        quad_2.position.set(3.2,((4-choice3-choice6)/2)-0.5,0);
                                        
                                        PIEaddElement(quad_2);
                                        
                                        // PIEdragElement(textMesh1);
                                        // PIEsetDrag(textMesh1,myMainDrag);
                                        // PIEsetDragEnd(textMesh1,myTwoEnd);
                                        PIErender();
                                    });

                                    loader.load( 'optimer_bold.typeface.js', function ( font ) {
                                        
                                        var textGeom = new THREE.TextGeometry(side3, 
                                        {
                                            size: 0.2, height: 0,
                                            font: font, weight: "normal", style: "normal"
                                        });  
                                    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
                                        quad_3 = new THREE.Mesh(textGeom, textMaterial );
                                        quad_3.position.set(2.5,((8-choice6-choice1)/2)+0.5,0);
                                        
                                        PIEaddElement(quad_3);
                                        
                                        // PIEdragElement(textMesh1);
                                        // PIEsetDrag(textMesh1,myMainDrag);
                                        // PIEsetDragEnd(textMesh1,myTwoEnd);
                                        PIErender();
                                    });

                                    loader.load( 'optimer_bold.typeface.js', function ( font ) {
                                        
                                        var textGeom = new THREE.TextGeometry(side4, 
                                        {
                                            size: 0.2, height: 0,
                                            font: font, weight: "normal", style: "normal"
                                        });  
                                    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
                                        quad_4 = new THREE.Mesh(textGeom, textMaterial );
                                        quad_4.position.set(-2,((1-choice1)/2)+1,0);
                                        
                                        PIEaddElement(quad_4);
                                        
                                        // PIEdragElement(textMesh1);
                                        // PIEsetDrag(textMesh1,myMainDrag);
                                        // PIEsetDragEnd(textMesh1,myTwoEnd);
                                        PIErender();
                                    });




                                    // heartShape.bezierCurveTo( x - 6, y, x - 6, y + 7,x - 6, y + 7 );
                                    // heartShape.bezierCurveTo( x - 6, y + 11, x - 3, y + 15.4, x + 5, y + 19 );
                                    // heartShape.bezierCurveTo( x + 12, y + 15.4, x + 16, y + 11, x + 16, y + 7 );
                                    // heartShape.bezierCurveTo( x + 16, y + 7, x + 16, y, x + 10, y );
                                    // heartShape.bezierCurveTo( x + 7, y, x + 5, y + 5, x + 5, y + 5 );

                                    var geometry = new THREE.ShapeGeometry( heartShape );
                                    var material = new THREE.MeshBasicMaterial( { color: 0xFF6A00 } );
                                    plane = new THREE.Mesh( geometry, material ) ;
                                    PIEaddElement( plane );
                                    var edges = new THREE.EdgesGeometry( geometry );
                                    line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0xffffff } ) );
                                    PIEaddElement( line );

                                    c=-1;

                                }else{
                                    var x = 0, y = 0;

                                    var heartShape = new THREE.Shape();
                                    var choice1= (Math.floor(Math.random()*2)+1);
                                    var choice2= (Math.floor(Math.random()*2)+1);
                                    var choice3= (Math.floor(Math.random()*2)+1);
                                    var choice4= (Math.floor(Math.random()*2)+1);
                                    var choice5= (Math.floor(Math.random()*2)+1);
                                    var choice6= (Math.floor(Math.random()*2)+1);
                                    heartShape.moveTo(3+choice6,3+choice6);
                                    heartShape.lineTo(5,choice5);
                                    heartShape.lineTo(-5,choice3);
                                    heartShape.lineTo(-3-choice1,3+choice4);
                                    heartShape.lineTo(3+choice6,3+choice6);
                                    
                                    var choice10= (Math.floor(Math.random()*5)+1);
                                    var side1=5+choice10;
                                    var side2=8+choice10;
                                    var side3=5.5+choice10;
                                    var side4=7+choice10;
                                
                                    perimeter=side1+side2+side3+side4;
                                    var materialSide = new THREE.MeshBasicMaterial( { color: 0xf9dacf} );
                                    var materialArray = [materialSide ];
                                    var loader = new THREE.FontLoader();

                                     loader.load( 'optimer_bold.typeface.js', function ( font ) {
                                        
                                        var textGeom = new THREE.TextGeometry(side1, 
                                        {
                                            size: 0.2, height: 0,
                                            font: font, weight: "normal", style: "normal"
                                        });  
                                    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
                                        quad_1 = new THREE.Mesh(textGeom, textMaterial );
                                        quad_1.position.set(((8+choice6)/2)+0.2,((3+choice6+choice5)/2),0);
                                        
                                        PIEaddElement(quad_1);
                                        
                                        // PIEdragElement(textMesh1);
                                        // PIEsetDrag(textMesh1,myMainDrag);
                                        // PIEsetDragEnd(textMesh1,myTwoEnd);
                                        PIErender();
                                    });


                                    loader.load( 'optimer_bold.typeface.js', function ( font ) {
                                        
                                        var textGeom = new THREE.TextGeometry(side2, 
                                        {
                                            size: 0.2, height: 0,
                                            font: font, weight: "normal", style: "normal"
                                        });  
                                    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
                                        quad_2= new THREE.Mesh(textGeom, textMaterial );
                                        quad_2.position.set(0,((choice3+choice5)/2)-0.5,0);
                                        
                                        PIEaddElement(quad_2);
                                        
                                        // PIEdragElement(textMesh1);
                                        // PIEsetDrag(textMesh1,myMainDrag);
                                        // PIEsetDragEnd(textMesh1,myTwoEnd);
                                        PIErender();
                                    });

                                    loader.load( 'optimer_bold.typeface.js', function ( font ) {
                                        
                                        var textGeom = new THREE.TextGeometry(side3, 
                                        {
                                            size: 0.2, height: 0,
                                            font: font, weight: "normal", style: "normal"
                                        });  
                                    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
                                        quad_3 = new THREE.Mesh(textGeom, textMaterial );
                                        quad_3.position.set(((-8-choice1)/2 )- 0.5,((3+choice4+choice3)/2)+0.5,0);
                                        
                                        PIEaddElement(quad_3);
                                        
                                        // PIEdragElement(textMesh1);
                                        // PIEsetDrag(textMesh1,myMainDrag);
                                        // PIEsetDragEnd(textMesh1,myTwoEnd);
                                        PIErender();
                                    });

                                    loader.load( 'optimer_bold.typeface.js', function ( font ) {
                                        
                                        var textGeom = new THREE.TextGeometry(side4, 
                                        {
                                            size: 0.2, height: 0,
                                            font: font, weight: "normal", style: "normal"
                                        });  
                                    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
                                        quad_4 = new THREE.Mesh(textGeom, textMaterial );
                                        quad_4.position.set(((choice6-choice1)/2),((6+choice6+choice4)/2)+0.5,0);
                                        
                                        PIEaddElement(quad_4);
                                        
                                        // PIEdragElement(textMesh1);
                                        // PIEsetDrag(textMesh1,myMainDrag);
                                        // PIEsetDragEnd(textMesh1,myTwoEnd);
                                        PIErender();
                                    });



                                    // heartShape.bezierCurveTo( x - 6, y, x - 6, y + 7,x - 6, y + 7 );
                                    // heartShape.bezierCurveTo( x - 6, y + 11, x - 3, y + 15.4, x + 5, y + 19 );
                                    // heartShape.bezierCurveTo( x + 12, y + 15.4, x + 16, y + 11, x + 16, y + 7 );
                                    // heartShape.bezierCurveTo( x + 16, y + 7, x + 16, y, x + 10, y );
                                    // heartShape.bezierCurveTo( x + 7, y, x + 5, y + 5, x + 5, y + 5 );

                                    var geometry = new THREE.ShapeGeometry( heartShape );
                                    var material = new THREE.MeshBasicMaterial( { color: 0xFF6A00 } );
                                    plane = new THREE.Mesh( geometry, material ) ;
                                    PIEaddElement( plane );

                                    var edges = new THREE.EdgesGeometry( geometry );
                                    line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0xffffff } ) );
                                    PIEaddElement( line );
                                    c=1;
                                }



    }else {

                            PIEremoveElement(plane);

                            
                            if(pos==1){
                                var x = 0, y = 0;

                                var heartShape = new THREE.Shape();
                                var choice1= (Math.floor(Math.random()*2)+1);
                                var choice2= (Math.floor(Math.random()*2)+1);
                                var choice3= (Math.floor(Math.random()*2)+1);
                                var choice4= (Math.floor(Math.random()*2)+1);
                                var choice5= (Math.floor(Math.random()*2)+1);
                                var choice6= (Math.floor(Math.random()*2)+1);
                                heartShape.moveTo(choice1,3+choice1);
                                heartShape.lineTo(4,choice3);
                                heartShape.lineTo(choice3,-3-choice6);
                                heartShape.lineTo(0,2-choice1);
                                heartShape.lineTo(-4-choice1,-2-choice3);
                                heartShape.lineTo(-6+choice5,4+choice1);
                                heartShape.lineTo(choice1,3+choice1);


                                var geometry = new THREE.ShapeGeometry( heartShape );
                                var material = new THREE.MeshBasicMaterial( { color: 0xFF6A00 } );
                                plane = new THREE.Mesh( geometry, material ) ;
                                PIEaddElement( plane );
                                var edges = new THREE.EdgesGeometry( geometry );
                                line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0xffffff } ) );
                                PIEaddElement( line );

                                pos=-1;
                            

                                var choice10= (Math.floor(Math.random()*5)+1);
                                var side1=6+choice10;
                                var side2=8+choice10;
                                var side3=7+choice10;
                                var side4=9+choice10;
                                var side5=12+choice10;
                                var side6=10+choice10;
                                perimeter=side1+side2+side3+side4+side5+side6;

                                    var materialSide = new THREE.MeshBasicMaterial( { color: 0xf9dacf} );
                                    var materialArray = [materialSide ];
                                    var loader = new THREE.FontLoader();

                                     loader.load( 'optimer_bold.typeface.js', function ( font ) {
                                        
                                        var textGeom = new THREE.TextGeometry(side1, 
                                        {
                                            size: 0.2, height: 0,
                                            font: font, weight: "normal", style: "normal"
                                        });  
                                    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
                                        hex_1 = new THREE.Mesh(textGeom, textMaterial );
                                        hex_1.position.set(((4+choice1)/2)+0.5,((3+choice1+choice3)/2)+0.5,0);
                                        
                                        PIEaddElement(hex_1);
                                        
                                        // PIEdragElement(textMesh1);
                                        // PIEsetDrag(textMesh1,myMainDrag);
                                        // PIEsetDragEnd(textMesh1,myTwoEnd);
                                        PIErender();
                                    });


                                    loader.load( 'optimer_bold.typeface.js', function ( font ) {
                                        
                                        var textGeom = new THREE.TextGeometry(side2, 
                                        {
                                            size: 0.2, height: 0,
                                            font: font, weight: "normal", style: "normal"
                                        });  
                                    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
                                        hex_2= new THREE.Mesh(textGeom, textMaterial );
                                        hex_2.position.set(((4+choice3)/2)+0.3,((-3-choice6+choice3)/2),0);
                                        
                                        PIEaddElement(hex_2);
                                        
                                        // PIEdragElement(textMesh1);
                                        // PIEsetDrag(textMesh1,myMainDrag);
                                        // PIEsetDragEnd(textMesh1,myTwoEnd);
                                        PIErender();
                                    });

                                    loader.load( 'optimer_bold.typeface.js', function ( font ) {
                                        
                                        var textGeom = new THREE.TextGeometry(side3, 
                                        {
                                            size: 0.2, height: 0,
                                            font: font, weight: "normal", style: "normal"
                                        });  
                                    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
                                        hex_3 = new THREE.Mesh(textGeom, textMaterial );
                                        hex_3.position.set((choice3)/2-0.5,((-1-choice1-choice6)/2)-0.5,0);
                                        
                                        PIEaddElement(hex_3);
                                        
                                        // PIEdragElement(textMesh1);
                                        // PIEsetDrag(textMesh1,myMainDrag);
                                        // PIEsetDragEnd(textMesh1,myTwoEnd);
                                        PIErender();
                                    });

                                    loader.load( 'optimer_bold.typeface.js', function ( font ) {
                                        
                                        var textGeom = new THREE.TextGeometry(side4, 
                                        {
                                            size: 0.2, height: 0,
                                            font: font, weight: "normal", style: "normal"
                                        });  
                                    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
                                        hex_4 = new THREE.Mesh(textGeom, textMaterial );
                                        hex_4.position.set((-4-choice1)/2 +0.2,((-choice3-choice1)/2)-0.5,0);
                                        
                                        PIEaddElement(hex_4);
                                        
                                        // PIEdragElement(textMesh1);
                                        // PIEsetDrag(textMesh1,myMainDrag);
                                        // PIEsetDragEnd(textMesh1,myTwoEnd);
                                        PIErender();
                                    });

                                    loader.load( 'optimer_bold.typeface.js', function ( font ) {
                                        
                                        var textGeom = new THREE.TextGeometry(side5, 
                                        {
                                            size: 0.2, height: 0,
                                            font: font, weight: "normal", style: "normal"
                                        });  
                                    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
                                        hex_5 = new THREE.Mesh(textGeom, textMaterial );
                                        hex_5.position.set(((-10-choice1+choice5)/2)-0.5,((2+choice1-choice3)/2),0);
                                        
                                        PIEaddElement(hex_5);
                                        
                                        // PIEdragElement(textMesh1);
                                        // PIEsetDrag(textMesh1,myMainDrag);
                                        // PIEsetDragEnd(textMesh1,myTwoEnd);
                                        PIErender();
                                    });



                                    loader.load( 'optimer_bold.typeface.js', function ( font ) {
                                        
                                        var textGeom = new THREE.TextGeometry(side6, 
                                        {
                                            size: 0.2, height: 0,
                                            font: font, weight: "normal", style: "normal"
                                        });  
                                    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
                                        hex_6 = new THREE.Mesh(textGeom, textMaterial );
                                        hex_6.position.set((-6+choice5+choice1)/2  -0.4 ,(7+2*choice1)/2+0.5,0);
                                        
                                        PIEaddElement(hex_6);
                                        
                                        // PIEdragElement(textMesh1);
                                        // PIEsetDrag(textMesh1,myMainDrag);
                                        // PIEsetDragEnd(textMesh1,myTwoEnd);
                                        PIErender();
                                    });





                            }else{

                                PIEremoveElement(plane);
                                var x = 0, y = 0;

                                var heartShape = new THREE.Shape();
                                var choice1= (Math.floor(Math.random()*2)+1);
                                var choice2= (Math.floor(Math.random()*2)+1);
                                var choice3= (Math.floor(Math.random()*2)+1);
                                var choice4= (Math.floor(Math.random()*2)+1);
                                var choice5= (Math.floor(Math.random()*2)+1);
                                var choice6= (Math.floor(Math.random()*2)+1);
                                heartShape.moveTo(choice1,3+choice1);
                                heartShape.lineTo(1+choice3,choice3);
                                heartShape.lineTo(choice3+4,-2-choice6);
                                heartShape.lineTo(0,2-choice1);
                                heartShape.lineTo(-4-choice1,-2-choice3);
                                heartShape.lineTo(-3-choice5,5-choice1);
                                heartShape.lineTo(choice1,3+choice1);


                                var geometry = new THREE.ShapeGeometry( heartShape );
                                var material = new THREE.MeshBasicMaterial( { color: 0xFF6A00} );
                                plane = new THREE.Mesh( geometry, material ) ;
                                PIEaddElement( plane );

                                    var edges = new THREE.EdgesGeometry( geometry );
                                    line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0xffffff } ) );
                                    PIEaddElement( line );
                                pos=1;



                                var choice10= (Math.floor(Math.random()*5)+1);
                                var side1=6+choice10;
                                var side2=8+choice10;
                                var side3=7+choice10;
                                var side4=9+choice10;
                                var side5=12+choice10;
                                var side6=10+choice10;
                                perimeter=side1+side2+side3+side4+side5+side6;


                                    var materialSide = new THREE.MeshBasicMaterial( { color: 0xf9dacf} );
                                    var materialArray = [materialSide ];
                                    var loader = new THREE.FontLoader();

                                     loader.load( 'optimer_bold.typeface.js', function ( font ) {
                                        
                                        var textGeom = new THREE.TextGeometry(side1, 
                                        {
                                            size: 0.2, height: 0,
                                            font: font, weight: "normal", style: "normal"
                                        });  
                                    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
                                        hex_1 = new THREE.Mesh(textGeom, textMaterial );
                                        hex_1.position.set(((2+choice1+choice3)/2),((3+choice1+choice3)/2)+0.5,0);
                                        
                                        PIEaddElement(hex_1);
                                        
                                        // PIEdragElement(textMesh1);
                                        // PIEsetDrag(textMesh1,myMainDrag);
                                        // PIEsetDragEnd(textMesh1,myTwoEnd);
                                        PIErender();
                                    });


                                    loader.load( 'optimer_bold.typeface.js', function ( font ) {
                                        
                                        var textGeom = new THREE.TextGeometry(side2, 
                                        {
                                            size: 0.2, height: 0,
                                            font: font, weight: "normal", style: "normal"
                                        });  
                                    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
                                        hex_2= new THREE.Mesh(textGeom, textMaterial );
                                        hex_2.position.set(((5+(2*choice3))/2)+0.3,((-2-choice6+choice3)/2),0);
                                        
                                        PIEaddElement(hex_2);
                                        
                                        // PIEdragElement(textMesh1);
                                        // PIEsetDrag(textMesh1,myMainDrag);
                                        // PIEsetDragEnd(textMesh1,myTwoEnd);
                                        PIErender();
                                    });

                                    loader.load( 'optimer_bold.typeface.js', function ( font ) {
                                        
                                        var textGeom = new THREE.TextGeometry(side3, 
                                        {
                                            size: 0.2, height: 0,
                                            font: font, weight: "normal", style: "normal"
                                        });  
                                    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
                                        hex_3 = new THREE.Mesh(textGeom, textMaterial );
                                        hex_3.position.set((4+choice3)/2,((-choice1-choice6)/2)-0.5,0);
                                        
                                        PIEaddElement(hex_3);
                                        
                                        // PIEdragElement(textMesh1);
                                        // PIEsetDrag(textMesh1,myMainDrag);
                                        // PIEsetDragEnd(textMesh1,myTwoEnd);
                                        PIErender();
                                    });

                                    loader.load( 'optimer_bold.typeface.js', function ( font ) {
                                        
                                        var textGeom = new THREE.TextGeometry(side4, 
                                        {
                                            size: 0.2, height: 0,
                                            font: font, weight: "normal", style: "normal"
                                        });  
                                    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
                                        hex_4 = new THREE.Mesh(textGeom, textMaterial );
                                        hex_4.position.set((-4-choice1)/2 +0.2,((-choice3-choice1)/2)-0.5,0);
                                        
                                        PIEaddElement(hex_4);
                                        
                                        // PIEdragElement(textMesh1);
                                        // PIEsetDrag(textMesh1,myMainDrag);
                                        // PIEsetDragEnd(textMesh1,myTwoEnd);
                                        PIErender();
                                    });

                                    loader.load( 'optimer_bold.typeface.js', function ( font ) {
                                        
                                        var textGeom = new THREE.TextGeometry(side5, 
                                        {
                                            size: 0.2, height: 0,
                                            font: font, weight: "normal", style: "normal"
                                        });  
                                    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
                                        hex_5 = new THREE.Mesh(textGeom, textMaterial );
                                        hex_5.position.set((-7-choice1-choice5)/2 -0.5,((3-choice1-choice3)/2),0);
                                        
                                        PIEaddElement(hex_5);
                                        
                                        // PIEdragElement(textMesh1);
                                        // PIEsetDrag(textMesh1,myMainDrag);
                                        // PIEsetDragEnd(textMesh1,myTwoEnd);
                                        PIErender();
                                    });



                                    loader.load( 'optimer_bold.typeface.js', function ( font ) {
                                        
                                        var textGeom = new THREE.TextGeometry(side6, 
                                        {
                                            size: 0.2, height: 0,
                                            font: font, weight: "normal", style: "normal"
                                        });  
                                    var textMaterial = new THREE.MeshBasicMaterial(materialSide);
                                        hex_6 = new THREE.Mesh(textGeom, textMaterial );
                                        hex_6.position.set((-3-choice5+choice1)/2  ,4.5,0);
                                        
                                        PIEaddElement(hex_6);
                                        
                                        // PIEdragElement(textMesh1);
                                        // PIEsetDrag(textMesh1,myMainDrag);
                                        // PIEsetDragEnd(textMesh1,myTwoEnd);
                                        PIErender();
                                    });


            }






    }


}


}

function notify(){

}
function checker(){





PIEremoveElement(score_number);

            var materialSide10 = new THREE.MeshBasicMaterial( { color: 0x000000} );
            var materialArray10 = [materialSide10 ];
            var loader = new THREE.FontLoader();

             loader.load( 'optimer_bold.typeface.js', function ( font ) {
                
                var textGeom = new THREE.TextGeometry(score, 
                {
                    size: 0.2, height: 0,
                    font: font, weight: "normal", style: "normal"
                });  
            var textMaterial = new THREE.MeshBasicMaterial(materialSide10);
                score_number = new THREE.Mesh(textGeom, textMaterial );
                score_number.position.set(10,1,0);
                
                PIEaddElement(score_number);
                // q2.visible=false;
                
                // PIEdragElement(textMesh1);
                // PIEsetDrag(textMesh1,myMainDrag);
                // PIEsetDragEnd(textMesh1,myTwoEnd);
                PIErender();
            });



 var eval=PIEgetInputText("Answer");
if(score>=5){
    perimeter=90-perimeter;
}


 if(eval==perimeter)
 {                                  
                                    score=score+1;

                                    if(score==10){
                                    
                                    PIEremoveElement(result);
                                    var materialSide8 = new THREE.MeshBasicMaterial( { color: 0x000000} );
                                    var materialArray = [materialSide8 ];
                                    var loader = new THREE.FontLoader();

                                     loader.load( 'optimer_bold.typeface.js', function ( font ) {
                                        
                                        var textGeom = new THREE.TextGeometry("You Win", 
                                        {
                                            size: 0.2, height: 0,
                                            font: font, weight: "normal", style: "normal"
                                        });  
                                    var textMaterial = new THREE.MeshBasicMaterial(materialSide8);
                                        result = new THREE.Mesh(textGeom, textMaterial );
                                        result.position.set(8,3,0);
                                        
                                        PIEaddElement(result);
                                        
                                        // PIEdragElement(textMesh1);
                                        // PIEsetDrag(textMesh1,myMainDrag);
                                        // PIEsetDragEnd(textMesh1,myTwoEnd);
                                        PIErender();

                                        
                                    });

                                     

                                     n.visible=true;


}else{
                                    PIEremoveElement(result);
                                    var materialSide11 = new THREE.MeshBasicMaterial( { color: 0x000000} );
                                    var materialArray = [materialSide11 ];
                                    var loader = new THREE.FontLoader();

                                     loader.load( 'optimer_bold.typeface.js', function ( font ) {
                                        
                                        var textGeom = new THREE.TextGeometry("Congrats!", 
                                        {
                                            size: 0.3, height: 0,
                                            font: font, weight: "normal", style: "normal"
                                        });  
                                    var textMaterial = new THREE.MeshBasicMaterial(materialSide11);
                                        result = new THREE.Mesh(textGeom, textMaterial );
                                        result.position.set(8,3,0);
                                        
                                        PIEaddElement(result);
                                        
                                        // PIEdragElement(textMesh1);
                                        // PIEsetDrag(textMesh1,myMainDrag);
                                        // PIEsetDragEnd(textMesh1,myTwoEnd);
                                        PIErender();
                                    });

                                     n.visible=true;


}
 

 }else{                             


            score=0;
                                    PIEremoveElement(result);
                                    var materialSide12 = new THREE.MeshBasicMaterial( { color: 0x000000} );
                                    var materialArray = [materialSide12 ];
                                    var loader = new THREE.FontLoader();

                                     loader.load( 'optimer_bold.typeface.js', function ( font ) {
                                        
                                        var textGeom = new THREE.TextGeometry("Sorry! Try Again", 
                                        {
                                            size: 0.3, height: 0,
                                            font: font, weight: "normal", style: "normal"
                                        });  
                                    var textMaterial = new THREE.MeshBasicMaterial(materialSide12);
                                        result = new THREE.Mesh(textGeom, textMaterial );
                                        result.position.set(8,3,0);
                                        
                                        PIEaddElement(result);
                                        
                                        // PIEdragElement(textMesh1);
                                        // PIEsetDrag(textMesh1,myMainDrag);
                                        // PIEsetDragEnd(textMesh1,myTwoEnd);
                                        PIErender();
                                    });

                                     n.visible=true;
 

 }



           





}
function initialiseControls(){ 

 PIEaddInputCommand("next",next); 
 PIEaddInputText("Answer",0,notify);  
 PIEaddInputCommand("Submit",checker);
 // PIEaddDisplayText() 

}


function initialiseOtherVariables(){
    
}

function resetExperiment(){


 pos=1;
 c=1;
 score=0;

 score_display.visible=true;
 score_number.visible=true;
 q1.visible=false;
 q2.visible=false;
 l1.visible=false;
 l2.visible=false;
 info1.visible=false;
 info3.visible=false;
 info2.visible=false;
 rope.visible=false;
// initialiseScene();
PIEremoveElement(result);


PIEremoveElement(plane);
PIEremoveElement(t0);
PIEremoveElement(tri_1);
PIEremoveElement(tri_2);
PIEremoveElement(tri_3);

PIEremoveElement(quad_1);
PIEremoveElement(quad_2);
PIEremoveElement(quad_3);
PIEremoveElement(quad_4);


PIEremoveElement(pent_1);
PIEremoveElement(pent_2);
PIEremoveElement(pent_3);
PIEremoveElement(pent_4);
PIEremoveElement(pent_5);


PIEremoveElement(hex_1);
PIEremoveElement(hex_2);
PIEremoveElement(hex_3);
PIEremoveElement(hex_4);
PIEremoveElement(hex_5);
PIEremoveElement(hex_6);

PIEremoveElement(score_number);

PIEremoveElement(line);
PIEremoveElement(result);
n.visible=false;
// plane.visible=true;


            var materialSide = new THREE.MeshBasicMaterial( { color: 0xf9dacf} );
            var materialArray = [materialSide ];
            var loader = new THREE.FontLoader();

             loader.load( 'optimer_bold.typeface.js', function ( font ) {
                
                var textGeom = new THREE.TextGeometry("Click Next to Start The Quiz", 
                {
                    size: 0.5, height: 0,
                    font: font, weight: "normal", style: "normal"
                });  
            var textMaterial = new THREE.MeshBasicMaterial(materialSide);
                plane = new THREE.Mesh(textGeom, textMaterial );
                plane.position.set(-5,0,0);
                
                PIEaddElement(plane);
                plane.visible=true;
                
                // PIEdragElement(textMesh1);
                // PIEsetDrag(textMesh1,myMainDrag);
                // PIEsetDragEnd(textMesh1,myTwoEnd);
                PIErender();
            });




}













//           ---------------------------------------------------------------------------------------------------------------------------------    -------------------------  -->





function PIEremoveElement(b){
    var a;
    var c;
    PIEscene.remove(b);
    c=false;
    for(a=PIEsceneElements.length-1;(c==false)&&(a>=0);a--)
        {if(b==PIEsceneElements[a]){while(a<PIEsceneElements.length-1){
            PIEsceneElements[a]=PIEsceneElements[a+1];a++}PIEsceneElements.pop();c=true

            }
        }

    }


var PIEtableData = [];
var PIEtableRows = [];
var PIEtableNames = [];
var PIEtables = [];
var PIEcurrentTable;
var PIEdraggedTable;
var PIEtableChangeHandlers = [];



function PIEtableDragStart(b) {
    var a;
    var c;
    PIEdraggedTable = b.target;
    a = window.getComputedStyle(PIEdraggedTable, null);
    c = (parseInt(a.getPropertyValue("left")) - b.clientX) + "," + (parseInt(a.getPropertyValue("top")) - b.clientY);
    b.dataTransfer.setData("Text", c);
    b.dataTransfer.dropEffect = "move";
    b.dataTransfer.setData("aTable", c);
    return (false)
}
function PIEtableDrop(a) {
    var b;
    if (PIEdraggedTable != null) {
        b = a.dataTransfer.getData("Text").split(",");
        PIEdraggedTable.style.left = (a.clientX + parseInt(b[0], 10)) + "px";
        PIEdraggedTable.style.top = (a.clientY + parseInt(b[1], 10)) + "px";
        PIEdraggedTable = null;
        a.stopPropagation();
        a.preventDefault();
        return false
    }
}
function PIEtableDragEnter(a) {
    a.preventDefault();
    return (false)
}
function PIEtableDragOver(a) {
    a.preventDefault();
    return (false)
}
function PIEtableSetInputChange(a) {
    var b;
    var d;
    var c;
    PIEtableChangeHandlers[PIEcurrentTable] = a;
    for (b = 0; (b < PIEtableRows[PIEcurrentTable].length); b++) {
        for (d = 0; (d < PIEtableData[PIEcurrentTable][b].length); d++) {
            if ((PIEtableData[PIEcurrentTable][b][d] != null) && (PIEtableData[PIEcurrentTable][b][d].children.length > 0)) {
                c = PIEtableData[PIEcurrentTable][b][d].children[0];
                c.addEventListener("change", PIEtableInputChange, false)
            }
        }
    }
}
function PIEtableInputChange(a) {
    a.preventDefault();
    PIEtableInputHandleEvent(a, PIEtableChangeHandlers);
    return (false)
}
function PIEtableInputHandleEvent(d, g) {
    var f;
    var e;
    var h;
    var c;
    var a;
    var b;
    var i;
    i = false;
    f = d.target;
    for (e = 0; (i == false) && (e < PIEtables.length); e++) {
        for (h = 0; (i == false) && (h < PIEtableRows[e].length); h++) {
            for (c = 0; (i == false) && (c < PIEtableData[e][h].length); c++) {
                if ((PIEtableData[e][h][c] != null) && (f == PIEtableData[e][h][c].children[0])) {
                    i = true
                }
            }
        }
    }
    if (i == true) {
        e--;
        h--;
        c--;
        if (g[e] != null) {
            g[e](h, c, f.value)
        }
    }
}
function PIEtableSelect(c) {
    var a;
    var b;
    PIEcurrentTable = 0;
    for (a = 0; (a < PIEtableNames.length); a++) {
        if (c == PIEtableNames[a]) {
            PIEcurrentTable = a
        }
    }
}
function PIEcreateTable(i, n, g, d) {
    var c;
    var b;
    var m;
    var f;
    var a;
    var h;
    var l;
    var k;
    var j;
    var e;
    PIEtableChangeHandlers.push(null);
    PIEtableNames.push(i);
    PIEtableRows.push(new Array(0));
    PIEtableData.push(new Array(0));
    PIEtableChangeHandlers.push(null);
    PIEcurrentTable = PIEtableNames.length - 1;
    c = document.createElement("div");
    c.draggable = true;
    c.addEventListener("dragstart", PIEtableDragStart, false);
    c.style.border = "2px solid white";
    c.style.borderRadius = "10px";
    c.style.display = "inline-block";
    c.style.position = "absolute";
    c.style.top = "20px";
    c.style.color = "white";
    document.body.appendChild(c);
    b = document.createElement("div");
    b.style.display = "inline-block";
    b.style.width = "100%";
    b.style.padding = "0px";
    c.appendChild(b);
    m = document.createElement("p");
    m.style.display = "inline-block";
    m.style.width = "100%";
    m.style.margin = "auto";
    m.style.border = "2 px solid white";
    m.style.borderRadius = "10px";
    m.style.backgroundColor = "#0020AA";
    b.appendChild(m);
    f = document.createElement("button");
    f.style.background = "none";
    f.style.border = "none";
    f.style.boxSizing = "border-box";
    a = document.createElement("img");
    a.src = "../PIE/images/TableAdd.png";
    a.alt = "add";
    a.height = "16";
    a.width = "16";
    a.style.display = "inline";
    f = document.createElement("button");
    f.style.background = "none";
    f.style.border = "none";
    f.style.boxSizing = "border-box";
    a = document.createElement("img");
    a.src = "../PIE/images/TableDelete.png";
    a.alt = "delete";
    a.height = "16";
    a.width = "16";
    a.style.display = "inline";
    a = document.createElement("span");
    a.style.padding = "5px";
    a.style.margin = "auto";
    a.style.align = "center";
    a.innerHTML = "<b>" + i + "</b>";
    m.appendChild(a);
    f = document.createElement("button");
    f.style.background = "none";
    f.style.border = "none";
    f.style.boxSizing = "border-box";
    f.style.align = "right";
    f.addEventListener("click", PIEtoggleTable, false);
    m.appendChild(f);
    a = document.createElement("img");
    a.src = "../PIE/images/TableFold.png";
    a.alt = "delete";
    a.height = "16";
    a.width = "16";
    a.style.display = "inline";
    f.appendChild(a);
    a = document.createElement("div");
    h = document.createElement("table");
    h.style.display = "inline-block";
    h.style.border = "1px solid white";
    h.style.borderRadius = "10px";
    h.style.padding = "0px";
    h.style.backgroundColor = "#0040BB";
    PIEtables.push(h);
    a.appendChild(h);
    c.appendChild(a);
    for (j = 0; j < n; j++) {
        for (e = 0; e < g; e++) {
            if (j == 0) {
                k = PIEcreateTableCell(j, e, d)
            } else {
                k = PIEcreateTableCell(j, e, false)
            }
        }
    }
    PIEupdateTable(PIEtables[PIEcurrentTable])
}
function PIEtoggleTable(e) {
    var g;
    var c;
    var a;
    var h;
    var f;
    var d;
    var b;
    e = e || window.event;
    e.defaultPrevented = true;
    g = null;
    if (e.target) {
        g = e.target
    } else {
        if (e.srcElement) {
            g = e.srcElement
        }
    }
    if (g != null) {
        if (g.nodeType == 3) {
            g = g.parentNode
        }
        a = ((g.parentNode).parentNode).parentNode;
        h = a.children;
        for (d = 0; (d < h.length); d++) {
            f = h[d].children;
            for (b = 0; (b < f.length); b++) {
                if (f[b].nodeName == "TABLE") {
                    c = f[b];
                    if (c.style.display == "inline-block") {
                        c.style.display = "none"
                    } else {
                        c.style.display = "inline-block"
                    }
                }
            }
        }
    }
}
function PIEupdateTable() {
    var c;
    var d;
    var a;
    var b;
    PIEtables[PIEcurrentTable].innerHTML = "";
    for (c = 0; (c < PIEtableRows[PIEcurrentTable].length); c++) {
        a = PIEtableRows[PIEcurrentTable][c];
        PIEtables[PIEcurrentTable].appendChild(a);
        for (d = 0; (d < PIEtableData[PIEcurrentTable][c].length); d++) {
            b = PIEtableData[PIEcurrentTable][c][d];
            a.appendChild(b)
        }
    }
}
function PIEexpandCell(a) {
    if ((a.target.size + 6) < a.target.value.length) {
        a.target.size = a.target.value.length - 6
    }
}
function PIEcreateInputElement(b, c) {
    var a;
    a = document.createElement("input");
    a.style.color = "#FFFFFF";
    a.style.backgroundColor = "#0060CC";
    a.style.border = "2px solid red";
    if (b >= 7) {
        a.size = (b - 6)
    } else {
        a.size = 1
    }
    a.addEventListener("keyup", PIEexpandCell, false);
    if (PIEtableChangeHandlers[PIEcurrentTable] != null) {
        a.addEventListener("change", PIEtableInputChange, false)
    }
    a.addEventListener("change", PIEtableInputChange, false);
    a.value = c;
    return (a)
}
function PIEsetColumnInput(a, b, e) {
    var d;
    var c;
    for (c = 0; (c < PIEtableRows[PIEcurrentTable].length) && (PIEtableRows[PIEcurrentTable][c] != null); c++) {
        if (PIEtableData[PIEcurrentTable][c].length > a) {
            if (PIEtableData[PIEcurrentTable][c][a] != null) {
                PIEtableData[PIEcurrentTable][c][a].innerHTML = "";
                PIEtableData[PIEcurrentTable][c][a].appendChild(PIEcreateInputElement(b, e))
            }
        }
    }
}
function PIEsetRowInput(e, a, d) {
    var c;
    var b;
    if ((PIEtableRows[PIEcurrentTable].length > e) && (PIEtableRows[PIEcurrentTable][e] != null)) {
        for (b = 0; (b < PIEtableData[PIEcurrentTable][e].length); b++) {
            if (PIEtableData[PIEcurrentTable][e][b] != null) {
                PIEtableData[PIEcurrentTable][e][b].innerHTML = "";
                PIEtableData[PIEcurrentTable][e][b].appendChild(PIEcreateInputElement(a, d))
            }
        }
    }
}
function PIEsetCellInput(e, a, b, d) {
    var c;
    while (PIEtableRows[PIEcurrentTable].length <= e) {
        PIEtableRows[PIEcurrentTable].push(null);
        PIEtableData[PIEcurrentTable].push(new Array(0))
    }
    if (PIEtableRows[PIEcurrentTable][e] == null) {
        PIEtableRows[PIEcurrentTable][e] = document.createElement("tr")
    }
    while (PIEtableData[PIEcurrentTable][e].length <= a) {
        PIEtableData[PIEcurrentTable][e].push(null)
    }
    if (PIEtableData[PIEcurrentTable][e][a] == null) {
        PIEtableData[PIEcurrentTable][e][a] = document.createElement("td")
    }
    PIEtableData[PIEcurrentTable][e][a].innerHTML = "";
    c = PIEcreateInputElement(b, d);
    PIEtableData[PIEcurrentTable][e][a].appendChild(c)
}
function PIEcreateTableCell(c, b, d) {
    var a;
    a = (d == true) ? "th" : "td";
    while (PIEtableRows[PIEcurrentTable].length <= c) {
        PIEtableRows[PIEcurrentTable].push(null);
        PIEtableData[PIEcurrentTable].push(new Array(0))
    }
    if (PIEtableRows[PIEcurrentTable][c] == null) {
        PIEtableRows[PIEcurrentTable][c] = document.createElement("tr")
    }
    while (PIEtableData[PIEcurrentTable][c].length <= b) {
        PIEtableData[PIEcurrentTable][c].push(null)
    }
    if (PIEtableData[PIEcurrentTable][c][b] == null) {
        PIEtableData[PIEcurrentTable][c][b] = document.createElement(a)
    } else {
        PIEtableData[PIEcurrentTable][c][b].innerHTML = ""
    }
}
function PIEupdateTableRow(c, a) {
    var b;
    for (b = 0; b < a.length; b++) {
        PIEupdateTableCell(c, b, a[b])
    }
}
function PIEupdateTableColumn(b, a) {
    var c;
    for (c = 0; c < a.length; c++) {
        PIEupdateTableCell(c, b, a[b])
    }
}
function PIEupdateTableCell(c, a, b) {
    while (PIEtableRows[PIEcurrentTable].length <= c) {
        PIEtableRows[PIEcurrentTable].push(null);
        PIEtableData[PIEcurrentTable].push(new Array(0))
    }
    if (PIEtableRows[PIEcurrentTable][c] == null) {
        PIEtableRows[PIEcurrentTable][c] = document.createElement("tr")
    }
    while (PIEtableData[PIEcurrentTable][c].length <= a) {
        PIEtableData[PIEcurrentTable][c].push(null)
    }
    if (PIEtableData[PIEcurrentTable][c][a] == null) {
        PIEtableData[PIEcurrentTable][c][a] = document.createElement("td")
    }
    if (PIEtableData[PIEcurrentTable][c][a].children.length == 0) {
        PIEtableData[PIEcurrentTable][c][a].innerHTML = b
    } else {
        PIEtableData[PIEcurrentTable][c][a].children[0].value = b
    }
}
function PIEsetTableRowStyle(d, a, c) {
    var b;
    if (d < PIEtableRows[PIEcurrentTable].length) {
        for (b = 0; (b < PIEtableData[PIEcurrentTable][d].length); b++) {
            PIEsetTableCellStyle(d, b, a, c)
        }
    }
}
function PIEsetTableColumnStyle(a, b, d) {
    var c;
    for (c = 0; (c < PIEtableRows[PIEcurrentTable].length); c++) {
        if (a < PIEtableData[PIEcurrentTable][c].length) {
            PIEsetTableCellStyle(c, a, b, d)
        }
    }
}
function PIEsetTableCellStyle(d, a, b, c) {
    if (d < PIEtableRows[PIEcurrentTable].length) {
        if (a < PIEtableData[PIEcurrentTable][rowI].length) {
            if (b == "color") {
                PIEtableData[PIEcurrentTable][d][a].style.color = c
            } else {
                if (b == "backgroundColor") {
                    PIEtableData[PIEcurrentTable][d][a].style.backgroundColor = c
                } else {
                    if (b == "margin") {
                        PIEtableData[PIEcurrentTable][d][a].style.margin = c
                    } else {
                        if (b == "padding") {
                            PIEtableData[PIEcurrentTable][d][a].style.padding = c
                        } else {
                            if (b == "border") {
                                PIEtableData[PIEcurrentTable][d][a].style.border = c
                            }
                        }
                    }
                }
            }
        }
    }
}


var helpContent;
function initialiseHelp()
{
    helpContent="";
    helpContent = helpContent + "<h2>Perimeter  Calculations </h2>";
    helpContent = helpContent + "<h3>About the experiment</h3>";
    helpContent = helpContent + "<p>The experiment shows irregular POLYGONS with dimensions of each side mentioned.Two levels are designed. First level is where student enters the perimeter value.In the second level the student should tell the rope left after fencing the boundary.</p>";
    helpContent = helpContent + "<h3>Setup stage</h3>";
    helpContent = helpContent + "<p>The control panel consists of next button, an input text field and submit button.</p>";
    helpContent = helpContent + "<p>You have access to coefficient of friction also</p>";
    helpContent = helpContent + "<p>Free Body Diagrams can be seen once the command is clicked in control panel </p>";
    helpContent = helpContent + "<h2>Happy Experimenting</h2>";
    PIEupdateHelp(helpContent);
}

var infoContent;
function initialiseInfo()
{
    infoContent =  "";
    infoContent = infoContent + "<h2>Experiment Concepts</h2>";
    infoContent = infoContent + "<h3>About the experiment</h3>";
    infoContent = infoContent + "<p>The experiment shows irregular polygons with dimensions</p>";
    infoContent = infoContent + "<h3>Perimeter</h3>";
    infoContent = infoContent + "<p>Sum of sides =perimeter</p>";
    infoContent = infoContent + "<h2>Happy Experimenting</h2>";
    PIEupdateInfo(infoContent);
}



