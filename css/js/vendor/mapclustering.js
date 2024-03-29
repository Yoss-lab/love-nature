/* global document */
//Init Map Scripts
function madlink_init_map_script(_map_id){
	var directory_path = '';
	var _data_list		 = data;
	var dir_latitude	 = '36.8072736';
	var dir_longitude	 = '10.1584576';
	var dir_map_type	 = 'ROADMAP';
	var dir_close_marker		= directory_path+'images/close.png';
	var dir_cluster_marker		= directory_path+'images/cluster.png';
	var dir_map_marker			= directory_path+'images/marker.png';
	var dir_cluster_color		= '#000';
	var dir_zoom				= '12';
	var dir_map_scroll			= 'false';
	var gmap_norecod			= '';

	if( _data_list.status == 'found' ){
		var response_data	= _data_list.listing;
		var location_center = new google.maps.LatLng(response_data[0].latitude,response_data[0].longitude);
	} else{
		var location_center = new google.maps.LatLng(dir_latitude,dir_longitude);
	}

	if(dir_map_type == 'ROADMAP'){
		var map_id = google.maps.MapTypeId.ROADMAP;
	} else if(dir_map_type == 'SATELLITE'){
		var map_id = google.maps.MapTypeId.SATELLITE;
	} else if(dir_map_type == 'HYBRID'){
		var map_id = google.maps.MapTypeId.HYBRID;
	} else if(dir_map_type == 'TERRAIN'){
		var map_id = google.maps.MapTypeId.TERRAIN;
	} else {
		var map_id = google.maps.MapTypeId.ROADMAP;
	}

	var scrollwheel	= true;
	var lock			 = 'unlock';

	if( dir_map_scroll == 'false' ){
		scrollwheel	= false;
		lock			 = 'lock';
	}

	var mapOptions = {
		zoom: parseInt(dir_zoom),
		position: location_center,
		maxZoom: 20,
		mapTypeId: map_id,
		scaleControl: true,
		scrollwheel: scrollwheel,
		disableDefaultUI: true
	}

	var map = new google.maps.Map(document.getElementById(_map_id), mapOptions);
	var bounds = new google.maps.LatLngBounds();

	//Zoom In
	if(document.getElementsByClassName('doc-mapplus') ){ 
		google.maps.event.addDomListener(document.getElementsByClassName('doc-mapplus'), 'click', function () {
			var current= parseInt( map.getZoom(),10 );
			current++;
			if(current>20){
				current=20;
			}
			map.setZoom(current);
		});
	}

	//Zoom Out
	if(document.getElementById('doc-mapminus') ){ 
		google.maps.event.addDomListener(document.getElementsByClassName('doc-mapminus'), 'click', function () {
			var current= parseInt( map.getZoom(),10);
			current--;
			if(current<0){
				current=0;
			}
			map.setZoom(current);
		});
	}

	//Lock Map
	if( document.getElementById('doc-lock') ){ 
		google.maps.event.addDomListener(document.getElementsByClassName('doc-lock'), 'click', function () {
			if(lock == 'lock'){
				map.setOptions({ 
						scrollwheel: true,
						draggable: true 
					}
				);
				jQuery("#doc-lock").html('<i class="fa fa-unlock-alt" aria-hidden="true"></i>');
				lock = 'unlock';
			}else if(lock == 'unlock'){
				map.setOptions({ 
						scrollwheel: false,
						draggable: false 
					}
				);
				jQuery("#doc-lock").html('<i class="fa fa-lock" aria-hidden="true"></i>');
				lock = 'lock';
			}
		});
	}
	
	//Map resize
	jQuery('a[href="#mapothercenters"]').on('shown.bs.tab', function(e){
        google.maps.event.trigger(map,"resize");
		map.setCenter(location_center);
    });
	
	if( _data_list.status == 'found' ){
		jQuery('#gmap-noresult').html('').hide(); //Hide No Result Div
		var markers = new Array();
		var info_windows = new Array();

		for (var i=0; i < response_data.length; i++) {
			markers[i] = new google.maps.Marker({
				position: new google.maps.LatLng(response_data[i].latitude,response_data[i].longitude),
				map: map,
				icon: response_data[i].marker,
				title: response_data[i].title,
				animation: google.maps.Animation.DROP,
				visible: true
			});
			bounds.extend(markers[i].getPosition());
			var boxText = document.createElement("div");
			boxText.className = 'directory-detail';
			
			var infobox_html = "";
			infobox_html += '<div class="infoBox"> <div class="tg-directpost">';
			infobox_html += '<figure class="tg-directpostimg"><img src="'+response_data[i].image+'" alt="'+response_data[i].title+'"><figcaption><a class="tg-usericon tg-iconfeatured" href="#"><em class="tg-usericonholder"><i class="fa fa-bolt"></i><span>featured</span></em></a><a class="tg-usericon tg-iconvarified" href="#"><em class="tg-usericonholder"><i class="fa fa-shield"></i><span>varified</span></em></a></figcaption></figure>';
			infobox_html += '<div class="tg-directinfo">';

				if(response_data[i].featured == 'yes'){
					infobox_html += '<span class="tg-featured"><i class="fa fa-bolt"></i></span>';
				}

				infobox_html += '<h3><a href="'+response_data[i].url+'">'+response_data[i].title+'</a></h3>';
				infobox_html += '<div class="tg-subjects">'+response_data[i].subjects+'</div>';
				infobox_html += '<ul class="tg-contactinfo"><li><a href="#"><i class="fa fa-location-arrow"></i><address>154 Bayswater Rd, W2 4HP, UK</address></a></li><li><a href="#"><i class="fa fa-phone"></i><span>+4 235 856843</span></a></li></ul>';
			infobox_html += '</div><div class="tg-bookappoinment"><a href="#"><i class="fa fa-thumbs-o-up"></i>99%<span>(1009 votes)</span></a><ul class="tg-metadata"><li><span class="tg-stars"><span></span></span></li><li><a href="#"><i class="fa fa-heart tg-like"></i></a></li></ul><button type="button" class="tg-btn" data-toggle="modal" data-target="#tg-appointmentlightbox">Book Appointment</button></div>';
			infobox_html += '</div> </div>';
			
			boxText.innerHTML = infobox_html;
			
			var myOptions = {
				content: boxText,
				disableAutoPan: true,
				maxWidth: 0,
				alignBottom: true,
				pixelOffset: new google.maps.Size( -127, -45 ),
				zIndex: null,
				closeBoxMargin: "0 0 -16px -16px",
				closeBoxURL: dir_close_marker,
				infoBoxClearance: new google.maps.Size( 1, 1 ),
				isHidden: false,
				pane: "floatPane",
				enableEventPropagation: false
			};
			var ib = new InfoBox( myOptions );
			attachInfoBoxToMarker( map, markers[i], ib );
		}
		map.fitBounds(bounds);
		/* Marker Clusters */
		var markerClustererOptions = {
			ignoreHidden: true,
			styles: [{
				textColor: dir_cluster_color,
				url: dir_cluster_marker,
				width: 40,
				height: 40,
			}]
		};
		var markerClusterer = new MarkerClusterer( map, markers, markerClustererOptions );
	} else{
		map.fitBounds(bounds);
		jQuery('#gmap-noresult').html(gmap_norecod).show();
	}
}

//Assign Info window to marker
function attachInfoBoxToMarker( map, marker, infoBox ){
	google.maps.event.addListener( marker, 'click', function(){
		var scale = Math.pow( 2, map.getZoom() );
		var offsety = ( (100/scale) || 0 );
		var projection = map.getProjection();
		var markerPosition = marker.getPosition();
		var markerScreenPosition = projection.fromLatLngToPoint( markerPosition );
		var pointHalfScreenAbove = new google.maps.Point( markerScreenPosition.x, markerScreenPosition.y - offsety );
		var aboveMarkerLatLng = projection.fromPointToLatLng( pointHalfScreenAbove );
		map.setCenter( aboveMarkerLatLng );
		
		jQuery(".infoBox").hide();
		infoBox.open( map, marker );
		
	});
}