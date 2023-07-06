verb = document.getElementById('verb');
groupe = 0;
    function group(b){
        if (b.lastIndexOf('enir')!=-1 && b.lastIndexOf('enir')==(b.length-4)){
            groupe = 3;
        }
        else if (b.lastIndexOf('oir')!=-1 && b.lastIndexOf('oir')==(b.length-3)){
            groupe = 3;
        }
        else if ((b.lastIndexOf('ir')!=-1) && b.lastIndexOf('ir')==(b.length-2) || b.lastIndexOf('ïr')==(b.length-2)){
            if (b.lastIndexOf('rrir')!=-1 || b.lastIndexOf('cir')!=-1 || b.lastIndexOf('vertir')!=-1 || b.lastIndexOf('jaillir')!=-1 ){
                groupe=2; 
            }
			else if (b.lastIndexOf('rir')!=-1 || b.lastIndexOf('llir')!=-1 || b.lastIndexOf('vir')!=-1 || b == 'fuir'){
                groupe=3; 
            }
            else if (b.lastIndexOf('ntir')!=-1 || b.lastIndexOf('rmir')!=-1 || b.lastIndexOf('tir')!=-1){
                groupe=3; 
            }
			else if (b.lastIndexOf('stir')!=-1){
                groupe=2; 
            }
            else {
                groupe = 2;
            }
            
        }
        else if (b.lastIndexOf('re')!=-1 && b.lastIndexOf('re')==(b.length-2)){
            groupe = 3;

        }
		else if (b == 'aller' || b == 'Aller') {
				groupe = 3;
		}
        else if (b.lastIndexOf('er')!=-1 && b.lastIndexOf('er')==(b.length-2)){
            groupe = 1;
        }
        else {
            alert("inserer un verbe valide");
        }
    }

    function present(){
        var cadre1 = document.getElementById('cadre1');
        var v = verb.value.toLowerCase();
        group(v);
        je="Je";
        if (v[0]=='a'||v[0]=='e'||v[0]=='é'||v[0]=='y'||v[0]=='u'|v[0]=='i'||v[0]=='o'){
            je="J'";
        }
        var p = new Array(je,' Tu',' Il/Elle',' Nous',' Vous',' Ils/Elles');
		if (v.indexOf('se ') == 0 ) {
			v = v.replace(/se /,'');
			je ='Je me';
			p = [je,'Tu te ','Il/Elle se ','Nous nous','Vous vous','Ils/Elles se'];
		}
		else if ( v.indexOf('s\'') == 0 ) {
			v = v.replace(/s\'/,'');
			je ='Je m\'';
			p = [je,'Tu t\' ','Il/Elle s\' ','Nous nous','Vous vous','Ils/Elles s\''];
		}
        if (groupe == 1){
            if (v.lastIndexOf('yer')!=-1){
                v = v.substring(0,v.length-1);
                var t = ['ie','ies','ie','yons','yez','ient'];
            }
            else if (v.lastIndexOf('ger')!=-1){
                v = v.substring(0,v.length-1);
                var t = ['ge','ges','ge','geons','gez','gent'];
            }
			else if (v.lastIndexOf('cer')!=-1){
                v = v.substring(0,v.length-1);
                var t = ['ce','ces','ce','çons','cez','cent'];
            }
            else {
                var t = ['e','es','e','ons','ez','ent'];
            }
        }
        else if (groupe == 2) {
			if (v.lastIndexOf('ïr')!=-1){
				var t = ['is','is','it','ïssons','ïssez','ïssent'];
			}
			else {
            var t = ['is','is','it','issons','issez','issent'];
			}
        }
        else if (groupe == 3) {
            if (v.lastIndexOf('evoir')!=-1 || v.lastIndexOf('évoir')!=-1){
				if (v.lastIndexOf('cevoir')!=-1){
					v = v.substring(0,v.length-4);
					var t = ['çois','çois','çoit','cevons','cevez','çoivent'];
				}
				else if (v == 'devoir') {
					v = v.substring(0,v.length-3);
					var t = ['ois','ois','oit','evons','evez','oivent'];
				}
				else {
				v = v.substring(0,v.length-1);
                var t = ['ois','ois','oit','oyons','oyez','oient'];
				}
            }
			else if (v == 'aller'){
				v = v.substring(0,v.length-3);
				p = ['Je','Tu','Il/Elle','Nous','Vous','Ils/Elles'];
				t = ['vais','vas','va','allons','allez','vont'];
			}
			else if (v == 'voir'){
				v = v.substring(0,v.length-1);
				t = ['ois','ois','oit','oyons','oyez','oient'];
			}
			else if (v == 'fuir'){
				t = ['is','is','it','yons','yez','ient'];
			}
			else if (v == 'savoir'){
				v = v.substring(0,v.length-3);
				t = ['ais','ais','ait','avons','avez','avent'];
			}
			else if (v == 'avoir'){
				v = v.substring(0,v.length-3);
				t = ['ai','as','a','avons','avez','ont'];
			}
			else if (v == 'bouillir'){
				v = v.substring(0,v.length-3);
				t = ['s','s','t','illons','illez','illent'];
			}
            else if (v.lastIndexOf('mettre')!=-1){
                v = v.substring(0,v.length-1);
                var t = ['s','s','','tons','tez','tent'];
            }
			else if (v.lastIndexOf('ordre')!=-1){
                v = v.substring(0,v.length-1);
                var t = ['ds','ds','d','dons','dez','dent'];
            }
            else if (v.lastIndexOf('enir')!=-1){
                v = v.substring(0,v.length-2);
                var t = ['iens','iens','ient','enons','enez','iennent'];
            }
            else if(v.lastIndexOf('voir')!=-1) {
				if (v.lastIndexOf('ouvoir')!=-1 && v.lastIndexOf('mouvoir')==-1) {
					v = v.substring(0,v.length-4);
					var t = ['eux','eux','eut','ouvons','ouvez','euvent'];
				}
				else if (v== 'mouvoir') {
					v = v.substring(0,v.length-4);
					var t = ['eus','eus','eut','ouvons','ouvez','euvent'];
				}
				else {
					v = v.substring(0,v.length-2);
					var t = ['ois','ois','oit','oyons','oyez','oient'];
				}
            }
            else if(v.lastIndexOf('oire')!=-1){
                v = v.substring(0,v.length-2);
                var t = ['ois','ois','oit','uvons','uvez','oivent'];
            }
            else if (v.lastIndexOf('faire')!=-1){
                v = v.substring(0,v.length-2);
                var t = ['ais','ais','ait','aisons','aites','ont'];
            }
            else if (v.lastIndexOf('rir')==v.length-3){
                if (v.lastIndexOf('courir')!=-1){
                    v = v.substring(0,v.length-1);
                    var t = ['rs','rs','rt','rons','rez','rent'];
                }
                else if (v.lastIndexOf('mourir')!=-1){
                    v = v.substring(0,v.length-3);
                    var t = ['eurs','eurs','eurt','ourons','ourez','eurent'];
                } 
                else {
                    v = v.substring(0,v.length-1);
                    var t = ['re','res','re','rons','rez','rent'];
                }
                
            }
            else if (v.lastIndexOf('oudre')!=-1){
                if (v.lastIndexOf('moudre')!=-1){
                    v = v.substring(0,v.length-1);
                    var t = ['ds','ds','d','lons','lez','lent']; 
                }
                else if(v.lastIndexOf('soudre')!=-1){
                    v = v.substring(0,v.length-2);
                    var t = ['us','us','ut','lvons','lvez','lvent'];
                }
                else if(v.lastIndexOf('coudre')!=-1){
                    v = v.substring(0,v.length-1);
                    var t = ['ds','ds','d','sons','sez','sent'];
                }
                
            }
			else if (v.lastIndexOf('indre')!=-1){
				 v = v.substring(0,v.length-2);
                 var t = ['ns','ns','nt','gnons','gnez','gnent'];
			}
            else if (v.lastIndexOf('outre')!=-1){
                v = v.substring(0,v.length-1);
                var t = ['s','s','t','tons','tez','tent'];
            }
			else if (v.lastIndexOf('aître')!=-1 || v.lastIndexOf('aitre')!=-1){
                v = v.substring(0,v.length-3);
                var t = ['ais','ais','aît','aissons','aissez','aissent'];
            }
            else if (v.lastIndexOf('ivre')!=-1){
                v = v.substring(0,v.length-1);
                var t = ['s','s','t','vons','vez','vent'];
            }
            else if (v.lastIndexOf('ire')!=-1){
				if (v == 'dire' || v == 'redire') {
					v = v.substring(0,v.length-1);
					var t = ['is','is','it','isons','ites','isent'];
				}
				else if (v.lastIndexOf('dire')!=-1) {
					v = v.substring(0,v.length-1);
					var t = ['is','is','it','isons','isez','isent'];
				}
                else if (v == 'frire') {
                    v = v.substring(0,v.length-3);
                    p = [je,'Tu','Il/Elle','-','-','-'];
                    var t = ['fris','fris','frit','','',''];
                }
				else if (v == 'rire') {
                v = v.substring(0,v.length-1);
                var t = ['is','is','it','ions','iez','ient'];
				}
				else if (v.lastIndexOf('uire')==v.length-4){
				t = ['s','s','t','sons','sez','sent'];
				}
				else {
				v = v.substring(0,v.length-1);
                var t = ['is','is','ît','isons','isez','isent'];
				}
            }
            else if (v.lastIndexOf('tir')!=-1){
				v = v.substring(0,v.length-1);
                var t = ['s','s','t','tons','tez','tent'];
            }
            else if (v.lastIndexOf('dre')!=-1){
                var t = ['s','s','','ons','ez','ent'];
            }
			else if (v == 'etre' || v == 'être'){
				groupe = 'auxiliaire';
				v = v.substring(0,v.length-2);
				p = ['Je','Tu','Il/Elle','Nous','Vous','Ils/Elles'];
				t = ['suis','es','est','sommes','êtes','sont'];
			}
			else if (v.lastIndexOf('eoir')==v.length-4) {
				v = v.substring(0,v.length-2);
				t = ['ois','ois','oit','oyons','oyez','oient'];
			}
			else if ( v.lastIndexOf('ouloir')!=-1 ) {
				v = v.substring(0,v.length-4);
				t = ['eux','eux','eut','oulons','oulez','eulent'];
			}
			else if ( v.lastIndexOf('vir')!=-1) {
				v = v.substring(0,v.length-1);
				t = ['s','s','t','vons','vez','vent'];
			}
			else if (v.lastIndexOf('rmir')!=-1) {
				v = v.substring(0,v.length-1);
				t = ['s','s','t','mons','mez','ment'];
			}
            else {
                t = ['s','s','t','sons','sez','sent'];
            }
        }
        var r = v.substring(0,v.length-2);
        cadre1.innerHTML = "<u><center>Present </center><br></u>";
		if (v.indexOf('pleuv')!=-1) {
			if (groupe == 3) {
                p = ['-','-','Il','-','-','-'];
                var t = ['','',' pleut','','',''];
                for(i=0 ; i<6 ; i++) {
                cadre1.innerHTML = cadre1.innerHTML + (' '+p[i] +t[i] +"<br>");
                }
            }
            else if (groupe == 1) {
                p = ['-','-','Il','-','-','-'];
                var t = ['','',' '+r+'e','','',''];
                for(i=0 ; i<6 ; i++) {
                cadre1.innerHTML = cadre1.innerHTML + (' '+p[i] +t[i] +"<br>");
                }
            }
			
		}
        else if (v == 'falloir'){
            for(i=0 ; i<5 ; i++){
                if (i==2){
                    cadre1.innerHTML = cadre1.innerHTML + ('Il'+' '+ 'faut'+"<br>");
                }
                cadre1.innerHTML = cadre1.innerHTML + '-'+'<br>'
            }
        }
		else {
        for(i=0 ; i<6 ; i++) {
		cadre1.innerHTML = cadre1.innerHTML + (p[i]+' '+ r +t[i] +"<br>");
        }
		}
    }
    function imparfait(){
        var cadre2 = document.getElementById('cadre2');
        var v = verb.value.toLowerCase();
		group(v);
		je="Je";
        if (v[0]=='a'||v[0]=='e'||v[0]=='é'||v[0]=='ê'||v[0]=='y'||v[0]=='u'|v[0]=='i'||v[0]=='o'){
            je="J'";
        }
        var p = new Array(je,' Tu',' Il/Elle',' Nous',' Vous',' Ils/Elles');
		if (v.indexOf('se ') == 0 ) {
			v = v.replace(/se /,'');
			je ='Je me';
			p = [je,'Tu te ','Il/Elle se ','Nous nous','Vous vous','Ils/Elles se'];
		}
		else if ( v.indexOf('s\'') == 0 ) {
			v = v.replace(/s\'/,'');
			je ='Je m\'';
			p = [je,'Tu t\' ','Il/Elle s\' ','Nous nous','Vous vous','Ils/Elles s\''];
		}
        if (groupe == 1){
            if (v.lastIndexOf('yer')!=-1){
                v = v.substring(0,v.length-1);
                var t = ['yais','yais','yait','yions','yiez','yaient'];
            }
            else if (v.lastIndexOf('ger')!=-1){
                v = v.substring(0,v.length-1);
                var t = ['geais','geais','geait','gions','giez','geaient'];
            }
			else if (v.lastIndexOf('cer')!=-1){
                v = v.substring(0,v.length-1);
                var t = ['çais','çais','çait','cions','ciez','çaient'];
            }
            else {
                var t = ['ais','ais','ait','ions','iez','aient'];
            }
        }
        else if (groupe == 2) {
			if (v.lastIndexOf('ïr')!=-1){
				var t = ['ïssais','ïssais','ïssait','ïssions','ïssiez','ïssaient'];
			}
			else {
            var t = ['issais','issais','issait','issions','issiez','issaient'];
			}
        }
        else if (groupe == 3) {
            if (v.lastIndexOf('evoir')!=-1 || v.lastIndexOf('évoir')!=-1){
				if (v.lastIndexOf('cevoir')!=-1){
					v = v.substring(0,v.length-4);
					var t = ['cevais','cevais','cevait','cevions','ceviez','cevaient'];
				}
				else if (v == 'devoir') {
					v = v.substring(0,v.length-3);
					var t = ['evais','evais','evait','evions','eviez','vaient'];
				}
				else {
				v = v.substring(0,v.length-1);
                var t = ['oyais','oyais','oyait','oyions','oyiez','oyaient'];
				}
            }
			else if (v == 'aller'){
				v = v.substring(0,v.length-3);
				t = ['allais','allais','allait','allions','alliez','allaient'];
			}
			else if (v == 'voir'){
				v = v.substring(0,v.length-1);
				t = ['oyais','oyais','oyait','oyions','oyiez','oyaient'];
			}
			else if (v == 'fuir'){
				t = ['yais','yais','yait','yions','yiez','yaient'];
			}
			else if (v == 'savoir'){
				v = v.substring(0,v.length-2);
				t = ['vais','vais','vait','vions','viez','vaient'];
			}
			else if (v == 'avoir'){
				v = v.substring(0,v.length-3);
				t = ['avais','avais','avait','avions','aviez','avaient'];
			}
			else if (v == 'bouillir'){
				v = v.substring(0,v.length-3);
				t = ['illais','illais','illait','illions','illiez','illaient'];
			}
            else if (v.lastIndexOf('mettre')!=-1){
                v = v.substring(0,v.length-1);
                var t = ['tais','tais','tait','tions','tiez','taient'];
            }
			else if (v.lastIndexOf('ordre')!=-1){
                v = v.substring(0,v.length-1);
                var t = ['dais','dais','dait','dions','diez','daient'];
            }
            else if (v.lastIndexOf('enir')!=-1){
                v = v.substring(0,v.length-2);
                var t = ['enais','enais','enait','enions','eniez','enaient'];
            }
            else if(v.lastIndexOf('voir')!=-1) {
				if (v.lastIndexOf('ouvoir')!=-1) {
					v = v.substring(0,v.length-4);
					var t = ['ouvais','ouvais','ouvait','ouvions','ouviez','ouvaient'];
				}
				else {
					v = v.substring(0,v.length-2);
					var t = ['oyais','oyais','oyait','oyions','oyiez','oyaient'];
				}
            }
            else if(v.lastIndexOf('oire')!=-1){
                v = v.substring(0,v.length-2);
                var t = ['uvais','uvais','uvait','uvions','uviez','uvaient'];
            }
            else if (v.lastIndexOf('faire')!=-1){
                v = v.substring(0,v.length-2);
                var t = ['aisais','aisais','aisait','aisions','aisiez','aisaient'];
            }
            else if (v.lastIndexOf('rir')==v.length-3){
                v = v.substring(0,v.length-1);
                var t = ['rais','rais','rait','rions','riez','raient'];    
            }
            else if (v.lastIndexOf('oudre')!=-1){
                if (v.lastIndexOf('moudre')!=-1){
                    v = v.substring(0,v.length-1);
                    var t = ['lais','lais','lait','lions','liez','laient']; 
                }
                else if(v.lastIndexOf('soudre')!=-1){
                    v = v.substring(0,v.length-2);
                    var t = ['lvais','lvais','lvait','lvions','lviez','lvaient'];
                }
                else if(v.lastIndexOf('coudre')!=-1){
                    v = v.substring(0,v.length-1);
                    var t = ['sais','sais','sait','sions','siez','saient'];
                }
                
            }
			else if (v.lastIndexOf('indre')!=-1){
				 v = v.substring(0,v.length-2);
                 var t = ['gnais','gnais','gnait','gnions','gniez','gnaient'];
			}
            else if (v.lastIndexOf('outre')!=-1){
                v = v.substring(0,v.length-1);
                var t = ['tais','tais','tait','tions','tiez','taient'];
            }
			else if (v.lastIndexOf('aître')!=-1 || v.lastIndexOf('aitre')!=-1){
                v = v.substring(0,v.length-3);
                var t = ['aissais','aissais','aissait','aissions','aissiez','aissaient'];
            }
            else if (v.lastIndexOf('ivre')!=-1){
                v = v.substring(0,v.length-1);
                var t = ['vais','vais','vait','vions','viez','vaient'];
            }
            else if (v.lastIndexOf('ire')!=-1){
				if (v == 'dire') {
					v = v.substring(0,v.length-1);
					var t = ['isais','isais','isait','isions','isiez','isaient'];
				}
				else if (v.lastIndexOf('dire')!=-1) {
					v = v.substring(0,v.length-1);
					var t = ['isais','isais','isait','isions','isiez','isaient'];
				}
                else if (v == 'frire') {
                    v = v.substring(0,v.length-3);
                    p = ['-','-','-','-','-','-'];
                    var t = ['','','','','',''];
                }
				else if (v == 'rire') {
                v = v.substring(0,v.length-1);
                var t = ['iais','iais','iait','iions','iiez','iaient'];
				}
				else if (v.lastIndexOf('uire')==v.length-4){
				var t = ['sais','sais','sait','sions','siez','saient'];
				}
				else {
				v = v.substring(0,v.length-1);
                var t = ['isais','isais','isait','isions','isiez','isaient'];
				}
            }
            else if (v.lastIndexOf('tir')!=-1){
				v = v.substring(0,v.length-1);
                var t = ['tais','tais','tait','tions','tiez','taient'];
            }
			else if (v == 'prendre'){
                v = v.substring(0,v.length-1);
                var t = ['ais','ais','ait','ions','iez','aient'];
            }
            else if (v.lastIndexOf('prendre')!=-1){
                v = v.substring(0,v.length-1);
                var t = ['ais','ais','ait','ions','iez','aient'];
            }
            else if (v.lastIndexOf('rdre')!=-1 || v.lastIndexOf('ndre')!=-1){
                v = v.substring(0,v.length-1);
                var t = ['dais','dais','dait','dions','diez','daient'];
            }
			else if (v == 'etre' || v == 'être'){
				v = v.substring(0,v.length-2);
				p = [je,'Tu','Il/Elle','Nous','Vous','Ils/Elles'];
				t = ['étais','étais','était','étions','étiez','étaient'];
			}
			else if (v.lastIndexOf('eoir')==v.length-4) {
				v = v.substring(0,v.length-2);
				t = ['oyais','oyais','oyait','oyions','oyiez','oyaient'];
			}
			else if ( v.lastIndexOf('ouloir')!=-1 ) {
				v = v.substring(0,v.length-4);
				t = ['oulais','oulais','oulait','oulions','ouliez','oulaient'];
			}
			else if ( v.lastIndexOf('vir')!=-1 ) {
				v = v.substring(0,v.length-1);
				t = ['ais','ais','ait','vions','viez','vaient'];
			}
			else if (v.lastIndexOf('rmir')!=-1) {
				v = v.substring(0,v.length-1);
				t = ['ais','ais','ait','mions','miez','maient'];
			}
            else {
                var t = ['ais','ais','ait','sions','siez','saient'];
            }
        }
        var r = v.substring(0,v.length-2);
        cadre2.innerHTML = "<u> <center> Imparfait </center><br></u>";
        if (v.indexOf('pleuv')!=-1) {
            if (groupe == 3) {
                p = ['-','-','Il','-','-','-'];
                var t = ['','',' pleuvait','','',''];
                for(i=0 ; i<6 ; i++) {
                cadre2.innerHTML = cadre2.innerHTML + (' '+p[i] +t[i] +"<br>");
                }
            }
            else if (groupe == 1){
                p = ['-','-','Il','-','-','-'];
                var t = ['','',' '+r+'ait','','',''];
                for(i=0 ; i<6 ; i++) {
                cadre2.innerHTML = cadre2.innerHTML + (' '+p[i] +t[i] +"<br>");
                }
            }
			
		}
        else if (v == 'falloir'){
            for(i=0 ; i<5 ; i++){
                if (i==2){
                    cadre2.innerHTML = cadre2.innerHTML + ('Il'+' '+ 'fallait'+"<br>");
                }
                cadre2.innerHTML = cadre2.innerHTML + '-'+'<br>'
            }
        }
		else {
        for(i=0 ; i<6 ; i++) {
		cadre2.innerHTML = cadre2.innerHTML + (p[i]+' '+ r +t[i] +"<br>");
        }
		}
    }
    function passe_simple(){
        var cadre3 = document.getElementById('cadre3');
        var v = verb.value.toLowerCase();
		je="Je";
        if (v[0]=='a'||v[0]=='e'||v[0]=='é'||v[0]=='y'||v[0]=='u'|v[0]=='i'||v[0]=='o'){
            je="J'";
        }
        var p = new Array(' Je',' Tu',' Il/Elle',' Nous',' Vous',' Ils/Elles');
		if (v.indexOf('se ') == 0 ) {
			v = v.replace(/se /,'');
			je ='Je me';
			p = [je,'Tu te ','Il/Elle se ','Nous nous','Vous vous','Ils/Elles se'];
		}
		else if ( v.indexOf('s\'') == 0 ) {
			v = v.replace(/s\'/,'');
			je ='Je m\'';
			p = [je,'Tu t\' ','Il/Elle s\' ','Nous nous','Vous vous','Ils/Elles s\''];
		}
		if  (groupe == 1) {
            if (v.lastIndexOf('yer')!=-1){
                v = v.substring(0,v.length-1);
                var t = ['yai','yas','ya','yâmes','yâtes','yèrent'];
            }
            else if (v.lastIndexOf('ger')!=-1){
                v = v.substring(0,v.length-1);
                var t = ['geai','geas','gea','geâmes','gâtes','gèrent'];
            }
            else if (v.lastIndexOf('cer')!=-1){
                v = v.substring(0,v.length-1);
                var t = ['çai','ças','ça','çâmes','çâtes','cèrent'];
            }
            else {
			var t = ['ai','as','a','âmes','âtes','èrent'];
            }
		}
		else if (groupe == 2) {
            if (v.lastIndexOf('ïr')!=-1){
                var t = ['ïs','ïs','ït','ïmes','ïtes','ïrent'];
            }
            else {
			var t = ['is','is','it','îmes','îtes','irent'];
            }
		}
        else if (groupe == 3) {
            if (v.lastIndexOf('evoir')!=-1 || v.lastIndexOf('évoir')!=-1 ){
                if (v.lastIndexOf('cevoir')!=-1){
                    v = v.substring(0,v.length-4);
                    var t = ['çus','çus','çut','çûmes','çûtes','çûrent'];
                }
                else if (v.lastIndexOf('evoir')!=-1 || v.lastIndexOf('évoir')!=-1 ) {
                    v = v.substring(0,v.length-1);
                    var t = ['is','is','it','îmes','îtes','irent'];
                }
                else {
                    v = v.substring(0,v.length-3);
                    var t = ['us','us','ut','ûmes','ûtes','ûrent'];
                }
            }
            else if (v == 'avoir'){
                v = v.substring(0,v.length-3);
                p = ['J\'','Tu','Il/Elle','Nous','Vous','Ils/Elles'];
                var t = ['eus','eus','eut','eûmes','eûtes','eurent'];
            }
            else if (v == 'aller'){
                v = v.substring(0,v.length-3);
                p = ['Je','Tu','Il/Elle','Nous','Vous','Ils/Elles'];
                t = ['allai','allas','alla','allâmes','allâtes','allèrent'];
            }
            else if (v == 'voir'){
                v = v.substring(0,v.length-1);
                t = ['is','is','it','îmes','îtes','irent'];
            }
            else if (v == 'fuir'){
                t = ['is','is','it','îmes','îtes','irent'];
            }
            else if (v == 'savoir'){
                v = v.substring(0,v.length-3);
                t = ['us','us','ut','ûmes','ûtes','urent'];
            }
            else if (v == 'bouillir'){
                t = ['is','is','it','îmes','îtes','irent'];
            }
            else if (v.lastIndexOf('mettre')!=-1){
                v = v.substring(0,v.length-3);
                var t = ['is','is','it','îmes','îtes','irent'];
            }
            else if (v.lastIndexOf('ordre')!=-1){
                v = v.substring(0,v.length-3);
                var t = ['is','is','it','îmes','îtes','irent'];
            }
            else if (v.lastIndexOf('enir')!=-1){
                v = v.substring(0,v.length-2);
                var t = ['ins','ins','int','înmes','întes','inrent'];
            }
            else if(v.lastIndexOf('voir')!=-1) {
                if (v.lastIndexOf('ouvoir')!=-1 ) {
                    v = v.substring(0,v.length-4);
                    var t = ['us','us','ut','ûmes','ûtes','urent'];
                }
                else {
                    var t = ['is','is','it','îmes','îtes','irent'];
                }
            }
            else if(v.lastIndexOf('oire')!=-1){
                v = v.substring(0,v.length-2);
                var t = ['us','us','ut','ûmes','ûtes','urent'];
            }
            else if (v.lastIndexOf('faire')!=-1){
                v = v.substring(0,v.length-2);
                var t = ['is','is','it','îmes','îtes','îrent'];
            }
            else if (v.lastIndexOf('rir')==v.length-3){
                if (v.lastIndexOf('courir')!=-1){
                    v = v.substring(0,v.length-1);
                    var t = ['rus','rus','rut','rûmes','rûtes','rurent'];
                }
                else if (v.lastIndexOf('mourir')!=-1){
                    v = v.substring(0,v.length-3);
                    var t = ['ourus','ourus','ourut','ourûmes','ourûtes','oururent'];
                } 
                else {
                    v = v.substring(0,v.length-1);
                    var t = ['is','is','it','îmes','rîtes','irent'];
                }
                
            }
            else if (v.lastIndexOf('oudre')!=-1){
                if (v.lastIndexOf('moudre')!=-1){
                    v = v.substring(0,v.length-1);
                    var t = ['lus','lus','lut','lûmes','lûtes','lurent']; 
                }
                else if(v.lastIndexOf('soudre')!=-1){
                    v = v.substring(0,v.length-2);
                    var t = ['lus','lus','lut','lûmes','lûtes','lurent']; 
                }
                else if(v.lastIndexOf('coudre')!=-1){
                    v = v.substring(0,v.length-1);
                    var t = ['sis','sis','sit','sîmes','sîtes','sirent'];
                }
                else {
                    v = v.substring(0,v.length-1);
                    var t = ['lus','lus','lut','lûmes','lûtes','lurent']; 
                }
            }
            else if (v.lastIndexOf('indre')!=-1){
                 v = v.substring(0,v.length-2);
                 var t = ['gnis','gnis','gnit','gnîmes','gnîtes','gnirent'];
            }
            else if (v.lastIndexOf('outre')!=-1){
                v = v.substring(0,v.length-4);
                p = ['-','-','-','-','-','-'];
                var t = ['','','','','',''];
            }
            else if (v.lastIndexOf('aître')!=-1 || v.lastIndexOf('aitre')!=-1){
                if (v.lastIndexOf('raître')!=-1 || v.lastIndexOf('raitre')!=-1){
                    v = v.substring(0,v.length-3);
                    var t = ['us','us','ut','ûmes','ûtes','urent']; 
                }
                else {
                    v = v.substring(0,v.length-3);
                    var t = ['aquis','aquis','aquît','aquîmes','aquîtes','aquirent'];
                }
            }
            else if (v.lastIndexOf('ivre')!=-1){
                v = v.substring(0,v.length-1);
                var t = ['écus','écus','écut','écûmes','écûtes','écurent'];
            }
            else if (v.lastIndexOf('ire')!=-1){
                if (v.lastIndexOf('dire')!=-1) {
                    v = v.substring(0,v.length-1);
                    var t = ['is','is','it','îmes','îtes','irent'];
                }
                else if (v == 'frire') {
                    v = v.substring(0,v.length-3);
                    p = ['-','-','-','-','-','-'];
                    var t = ['','','','','',''];
                }
                else if (v.lastIndexOf('rire')!=-1) {
                    v = v.substring(0,v.length-1);
                    var t = ['is','is','it','îmes','îtes','irent'];
                }
                else {
                    t = ['sis','sis','sit','sîmes','sîtes','sirent'];
                }
            }
            else if (v.lastIndexOf('tir')!=-1){
                v = v.substring(0,v.length-1);
                var t = ['tis','tis','tit','tîmes','tîtes','tirent'];
            }
            else if (v.lastIndexOf('dre')!=-1){
                if (v.lastIndexOf('prendre')!=-1) {
                    v = v.substring(0,v.length-3);
                    var t = ['is','is','it','îmes','îtes','îrent'];
                }
                else {
                    var t = ['is','is','it','îmes','îtes','îrent'];
                }
            }
            else if (v == 'etre' || v == 'être'){
                v = v.substring(0,v.length-2);
                p = ['Je','Tu','Il/Elle','Nous','Vous','Ils/Elles'];
                t = ['fus','fus','fut','fûmes','fûtes','furent'];
            }
            else if (v.lastIndexOf('eoir')==v.length-4) {
                v = v.substring(0,v.length-2);
                var t = ['is','is','it','îmes','îtes','îrent'];
            }
            else if ( v.lastIndexOf('ouloir')!=-1 ) {
                v = v.substring(0,v.length-4);
                t = ['oulus','oulus','oulut','oulûmes','oulûtes','oulurent'];
            }
            else if ( v.lastIndexOf('vir')!=-1) {
                v = v.substring(0,v.length-1);
                t = ['vis','vis','vit','vîmes','vîtes','virent'];
            }
            else if (v.lastIndexOf('rmir')!=-1) {
                v = v.substring(0,v.length-1);
                t = ['mis','mis','mit','mîmes','mîtes','mirent'];
            }
            else {
                t = ['is','is','it','îmes','îtes','irent'];
            }
        }
        var r = v.substring(0,v.length-2);
        cadre3.innerHTML = "<u> <center> Passé Simple </center><br></u>";
        if (v.indexOf('pleuv')!=-1) {
			if (groupe == 3) {
                p = ['-','-','Il','-','-','-'];
                var t = ['','',' plut','','',''];
                for(i=0 ; i<6 ; i++) {
                cadre3.innerHTML = cadre3.innerHTML + (' '+p[i] +t[i] +"<br>");
                }
            }
            else if (groupe == 1) {
                p = ['-','-','Il','-','-','-'];
                var t = ['','',' '+r+'a','','',''];
                for(i=0 ; i<6 ; i++) {
                cadre3.innerHTML = cadre3.innerHTML + (' '+p[i] +t[i] +"<br>");
                }
            }
			
		}
        else if (v == 'falloir'){
            for(i=0 ; i<5 ; i++){
                if (i==2){
                    cadre3.innerHTML = cadre3.innerHTML + ('Il'+' '+ 'fallut'+"<br>");
                }
                cadre3.innerHTML = cadre3.innerHTML + '-'+'<br>'
            }
        }
		else {
        for(i=0 ; i<6 ; i++) {
		cadre3.innerHTML = cadre3.innerHTML + (p[i]+' '+ r +t[i] +"<br>");
        }
		}
    }
    function futur(){
        var cadre4 = document.getElementById('cadre4');
        var v = verb.value.toLowerCase();
        group(v);
        je="Je";
        if (v[0]=='a'||v[0]=='e'||v[0]=='é'||v[0]=='y'||v[0]=='u'|v[0]=='i'||v[0]=='o'){
            je="J'";
        }
        var p = new Array(je,' Tu',' Il/Elle',' Nous',' Vous',' Ils/Elles');
		if (v.indexOf('se ') == 0 ) {
			v = v.replace(/se /,'');
			je ='Je me';
			p = [je,'Tu te ','Il/Elle se ','Nous nous','Vous vous','Ils/Elles se'];
		}
		else if ( v.indexOf('s\'') == 0 ) {
			v = v.replace(/s\'/,'');
			je ='Je m\'';
			p = [je,'Tu t\' ','Il/Elle s\' ','Nous nous','Vous vous','Ils/Elles s\''];
		}
        if (groupe == 1){
            if (v.lastIndexOf('yer')!=-1){
                v = v.substring(0,v.length-1);
                var t = ['ierai','ieras','iera','ierons','ierez','ieront'];
            }
            else if (v.lastIndexOf('ger')!=-1){
                v = v.substring(0,v.length-1);
                var t = ['gerai','geras','gera','gerons','gerez','geront'];
            }
			else if (v.lastIndexOf('cer')!=-1){
                v = v.substring(0,v.length-1);
                var t = ['cerai','ceras','cera','çerons','cerez','ceront'];
            }
            else {
                var t = ['erai','eras','era','erons','erez','eront'];
            }
        }
        else if (groupe == 2) {
			if (v.lastIndexOf('ïr')!=-1){
				var t = ['ïrai','ïras','ïra','ïrons','ïrez','ïront'];
			}
			else {
            var t = ['irai','iras','ira','irons','irez','iront'];
			}
        }
        else if (groupe == 3){
            if (v.lastIndexOf('evoir')!=-1 || v.lastIndexOf('évoir')!=-1){
				if (v.lastIndexOf('cevoir')!=-1){
					v = v.substring(0,v.length-4);
					var t = ['cevrai','cevras','cevra','cevrons','cevrez','cevront'];
				}
				else {
				v = v.substring(0,v.length-2);
                var t = ['vrai','vras','vra','vrons','vrez','vront'];
				}
            }
			else if (v == 'aller'){
				v = v.substring(0,v.length-3);
				t = ['irai','iras','ira','irons','irez','iront'];
			}
			else if (v == 'voir'){
				v = v.substring(0,v.length-1);
				t = ['errai','erras','erra','errons','errez','erront'];
			}
			else if (v == 'fuir'){
				t = ['irai','iras','ira','irons','irez','iront'];
			}
			else if (v == 'savoir'){
				v = v.substring(0,v.length-3);
				t = ['aurai','auras','aura','aurons','aurez','auront'];
			}
			else if (v == 'avoir'){
				v = v.substring(0,v.length-3);
				t = ['aurai','auras','aura','aurons','aurez','auront'];
			}
			else if (v == 'bouillir'){
				v = v.substring(0,v.length-3);
				t = ['illirai','illiras','illira','illirons','illirez','illiront'];
			}
            else if (v.lastIndexOf('mettre')!=-1){
                var t = ['rai','ras','ra','rons','rez','ront'];
            }
			else if (v.lastIndexOf('ordre')!=-1){
                v = v.substring(0,v.length-1);
                var t = ['drai','dras','dra','drons','drez','dront'];
            }
            else if (v.lastIndexOf('enir')!=-1){
                v = v.substring(0,v.length-2);
                var t = ['iendrai','iendras','iendra','iendrons','iendrez','iendront'];
            }
            else if(v.lastIndexOf('voir')!=-1) {
				if (v == 'pouvoir') {
					v = v.substring(0,v.length-2);
					var t = ['rrai','rras','rra','rrons','rrez','rront'];
				}
				else if (v.lastIndexOf('mouvoir')!=-1) {
					v = v.substring(0,v.length-4);
					var t = ['ouvrai','ouvras','ouvra','ouvrons','ouvrez','ouvront'];
				}
				else {
					v = v.substring(0,v.length-2);
					var t = ['ouvrai','ouvras','ouvra','ouvrons','ouvrez','ouvront'];
				}
            }
            else if(v.lastIndexOf('oire')!=-1){
                v = v.substring(0,v.length-2);
                var t = ['oirai','oiras','oira','oirons','oirez','oiront'];
            }
            else if (v.lastIndexOf('faire')!=-1){
                v = v.substring(0,v.length-2);
                var t = ['erai','eras','era','erons','erez','eront'];
            }
            else if (v.lastIndexOf('rir')==v.length-3){
                if (v.lastIndexOf('courir')!=-1){
                    v = v.substring(0,v.length-1);
                    var t = ['rrai','rras','rra','rrons','rrez','rront'];
                }
                else if (v.lastIndexOf('mourir')!=-1){
                    v = v.substring(0,v.length-1);
                    var t = ['rrai','rras','rra','rrons','rrez','rront'];
                } 
                else {
                    v = v.substring(0,v.length-1);
                    var t = ['rrai','rras','rra','rrons','rrez','rront'];
                }
                
            }
            else if (v.lastIndexOf('oudre')!=-1){
                v = v.substring(0,v.length-1);
                var t = ['drai','dras','dra','drons','drez','dront']; 
            }
			else if (v.lastIndexOf('indre')!=-1){
				v = v.substring(0,v.length-1);
                var t = ['drai','dras','dra','drons','drez','dront']; 
			}
            else if (v.lastIndexOf('outre')!=-1){
                v = v.substring(0,v.length-1);
                var t = ['trai','tras','tra','trons','trez','tront'];
            }
			else if (v.lastIndexOf('aître')!=-1 || v.lastIndexOf('aitre')!=-1){
                v = v.substring(0,v.length-3);
                var t = ['aîtrai','aîtras','aîtra','aîtrons','aîtrez','aîtront'];
            }
            else if (v.lastIndexOf('ivre')!=-1){
                v = v.substring(0,v.length-1);
                var t = ['vrai','vras','vra','vrons','vrez','vront'];
            }
            else if (v.lastIndexOf('ire')!=-1){
				if (v.lastIndexOf('dire')!=-1) {
					v = v.substring(0,v.length-1);
					var t = ['irai','iras','ira','irons','irez','iront'];
				}
                else if (v == 'frire') {
                    v = v.substring(0,v.length-3);
                    p = [je,'Tu','Il/Elle','-','-','-'];
                    var t = ['frirai','friras','frira','','',''];
                }
				else if (v.lastIndexOf('uire')==v.length-4){
                    v = v.substring(0,v.length-1);
                    var t = ['irai','iras','ira','irons','irez','iront'];
				}
				else {
				    v = v.substring(0,v.length-1);
                    var t = ['irai','iras','ira','irons','irez','iront'];
				}
            }
            else if (v.lastIndexOf('tir')!=-1){
				var t = ['irai','iras','ira','irons','irez','iront'];
            }
            else if (v.lastIndexOf('dre')!=-1){
                var t = ['rai','ras','ra','rons','rez','ront'];
            }
			else if (v == 'etre' || v == 'être'){
				v = v.substring(0,v.length-2);
				p = ['Je','Tu','Il/Elle','Nous','Vous','Ils/Elles'];
				t = ['serai','seras','sera','serons','serez','seront'];
			}
			else if (v.lastIndexOf('eoir')==v.length-4) {
				v = v.substring(0,v.length-2);
				t = ['oirai','oiras','oira','oirons','oirez','oiront'];
			}
			else if ( v.lastIndexOf('ouloir')!=-1 ) {
                v = v.substring(0,v.length-2);
				var t = ['drai','dras','dra','drons','drez','dront'];
			}
			else if ( v.lastIndexOf('vir')!=-1) {
				var t = ['irai','iras','ira','irons','irez','iront'];
			}
			else if (v.lastIndexOf('rmir')!=-1) {
				var t = ['irai','iras','ira','irons','irez','iront'];
			}
            else if (v =='falloir'){
                v=v;
            }
            else {
                v = v.substring(0,v.length-1);
                var t = ['irai','iras','ira','irons','irez','iront'];
            }
        }
        var r = v.substring(0,v.length-2);
        cadre4.innerHTML = "<u> <center> Futur Simple </center><br></u>";
        if (v =='falloir'){
            for(i=0 ; i<5 ; i++){
                if (i==2){
                    cadre4.innerHTML = cadre4.innerHTML + ('Il'+' '+'faudra'+"<br>");
                }
                cadre4.innerHTML = cadre4.innerHTML + '-'+'<br>'
            }
        }
        else if (v.indexOf('pleuv')!=-1) {
			if (groupe == 3) {
                p = ['-','-','Il','-','-','-'];
                var t = ['','',' pleuvra','','',''];
                for(i=0 ; i<6 ; i++) {
                cadre4.innerHTML = cadre4.innerHTML + (' '+p[i] +t[i] +"<br>");
                }
            }
            else if (groupe == 1) {
                p = ['-','-','Il','-','-','-'];
                var t = ['','',' '+r+'era','','',''];
                for(i=0 ; i<6 ; i++) {
                cadre4.innerHTML = cadre4.innerHTML + (' '+p[i] +t[i] +"<br>");
                }
            }
			
        }
		else {
            for(i=0 ; i<6 ; i++) {
		    cadre4.innerHTML = cadre4.innerHTML + (p[i]+' '+ r +t[i] +"<br>");
            }
		}
    }
    function passe_compose(){
        var cadre5 = document.getElementById('cadre5');
        var v = verb.value.toLowerCase();
        var p = new Array(' J\'',' Tu',' Il/Elle',' Nous',' Vous',' Ils/Elles');
        var aux =new  Array('ai','as','a','avons','avez','ont'); 
        if (v.indexOf('se ') == 0 ) {
			v = v.replace(/se /,'');
			je ='Je me';
			p = [je,'Tu t\' ','Il/Elle s\' ','Nous nous','Vous vous','Ils/Elles se'];
            aux = ['suis','es','est','sommes','êtes','sont'];
		}
		else if ( v.indexOf('s\'') == 0 ) {
			v = v.replace(/s\'/,'');
			je ='Je me';
			p = [je,'Tu t\' ','Il/Elle s\' ','Nous nous','Vous vous','Ils/Elles se'];
            aux = ['suis','es','est','sommes','êtes','sont'];
		}
        if (groupe == 1){
            if (v == 'rester') {
                p = [' Je',' Tu',' Il/Elle',' Nous',' Vous',' Ils/Elles'];
                aux = ['suis','es','est','sommes','êtes','sont'];
                var t = 'é';
            }
            else {
                var t = 'é';
            }
        }
        else if (groupe == 2) {
			if (v.lastIndexOf('ïr')!=-1){
				var t = 'ï';
			}
			else {
                var t = 'i';
			}
        }
        else if (groupe == 3) {
            if (v.lastIndexOf('evoir')!=-1 || v.lastIndexOf('évoir')!=-1){
				if (v.lastIndexOf('cevoir')!=-1){
                    v = v.substring(0,v.length-4);
					var t = 'çu';
				}
				else if (v == 'devoir') {
					v = v.substring(0,v.length-3);
					var t = 'û';
				}
				else {
				    v = v.substring(0,v.length-1);
                    var t = 'u';
				}
            }
			else if (v == 'aller'){
				p = ['Je','Tu','Il/Elle','Nous','Vous','Ils/Elles'];
                aux = ['suis','es','est','sommes','êtes','sont'];
				t = 'é';
			}
			else if (v == 'voir'){
				v = v.substring(0,v.length-1);
				t = 'u';
			}
			else if (v == 'fuir'){
				t = 'i';
			}
			else if (v == 'savoir'){
				v = v.substring(0,v.length-3);
				t = 'u'
			}
			else if (v == 'avoir'){
				v = v.substring(0,v.length-3);
				t = 'eu';
			}
			else if (v == 'bouillir'){
				t = 'i';
			}
            else if (v.lastIndexOf('mettre')!=-1){
                v = v.substring(0,v.length-3);
                var t = 'is';
            }
			else if (v.lastIndexOf('ordre')!=-1){
                var t = 'u';
            }
            else if (v.lastIndexOf('enir')!=-1){
                if (v.lastIndexOf('venir')!=-1){
                    p = ['Je','Tu','Il/Elle','Nous','Vous','Ils/Elles'];
                    aux = ['suis','es','est','sommes','êtes','sont'];
                    var t = 'u';
                }
                else {
                    var t = 'u';
                }
            }
            else if(v.lastIndexOf('voir')!=-1) {
                if (v== 'mouvoir') {
					v = v.substring(0,v.length-4);
					var t = 'û';
				}
				else if (v.lastIndexOf('ouvoir')!=-1) {
					v = v.substring(0,v.length-4);
					var t = 'u';
				}
				else {
					var t = 'u';
				}
            }
            else if(v.lastIndexOf('oire')!=-1){
                v = v.substring(0,v.length-2);
                var t = 'u';
            }
            else if (v.lastIndexOf('faire')!=-1){
                v = v.substring(0,v.length-2);
                var t = 'ait';
            }
            else if (v.lastIndexOf('rir')==v.length-3){
                if (v.lastIndexOf('courir')!=-1){
                    var t = 'u';
                }
                else if (v == 'mourir'){
                    v = v.substring(0,v.length-4);
                    p = ['Je','Tu','Il/Elle','Nous','Vous','Ils/Elles'];
                    aux = ['suis','es','est','sommes','êtes','sont'];
                    var t = 'mort';
                } 
                else {
                    var t = 'u';
                }
                
            }
            else if (v.lastIndexOf('oudre')!=-1){
                if (v.lastIndexOf('moudre')!=-1){
                    v = v.substring(0,v.length-1);
                    var t = 'lu'; 
                }
                else if(v.lastIndexOf('soudre')!=-1){
                    v = v.substring(0,v.length-2);
                    var t = 'lu';
                }
                else if(v.lastIndexOf('coudre')!=-1){
                    v = v.substring(0,v.length-1);
                    var t = 'su';
                }
                
            }
			else if (v.lastIndexOf('indre')!=-1){
				 v = v.substring(0,v.length-2);
                 var t = 'nt';
			}
            else if (v.lastIndexOf('outre')!=-1){
                v = v.substring(0,v.length-1);
                var t = 'tu';
            }
			else if (v.lastIndexOf('aître')!=-1 || v.lastIndexOf('aitre')!=-1){
                if (v == 'naitre' || v == 'naître'){

                }
                v = v.substring(0,v.length-3);
                var t = 'ru';
            }
            else if (v.lastIndexOf('ivre')!=-1){
                v = v.substring(0,v.length-2);
                var t = 'écu';
            }
            else if (v.lastIndexOf('ire')!=-1){
				if (v.lastIndexOf('dire')!=-1) {
					v = v.substring(0,v.length-1);
					var t = 'it';
				}
                else if (v == 'frire') {
                    v = v.substring(0,v.length-1);
					var t = 'it';
                }
				else if (v == 'rire') {
                    v = v.substring(0,v.length-1);
                    var t = 'i';
				}
				else if (v== 'nuire'){
                    v = v.substring(0,v.length-1);
                    var t = 'i';
				}
				else {
				    v = v.substring(0,v.length-1);
                    var t = 'it';
				}
            }
            else if (v.lastIndexOf('tir')!=-1){
                var t = 'i';
            }
            else if (v.lastIndexOf('dre')!=-1){
                var t = 'u';
            }
			else if (v == 'etre' || v == 'être'){
				v = v.substring(0,v.length-2);
				p = ['J\'','Tu','Il/Elle','Nous','Vous','Ils/Elles'];
				t = 'été';
			}
			else if (v.lastIndexOf('eoir')==v.length-4) {
				v = v.substring(0,v.length-2);
                t = 'is';
			}
			else if ( v.lastIndexOf('ouloir')!=-1 ) {
				v = v.substring(0,v.length-2);
				t = 'lu';
			}
            else {
                t = 'i';
            }
        }
        var r = v.substring(0,v.length-2);
        cadre5.innerHTML = "<u> <center> Passé Composé </center><br></u>";
        if (v.indexOf('pleuv')!=-1) {
            if (v == 'pleuvoir'){
                for(i=0 ; i<5 ; i++){
                    if (i==2){
                        cadre5.innerHTML = cadre5.innerHTML + ('Il'+' '+aux[i]+' '+ 'plut'+"<br>");
                    }
                    cadre5.innerHTML = cadre5.innerHTML + '-'+'<br>'
                }
            }
            else if(groupe == 1){
                for(i=0 ; i<5 ; i++){
                    if (i==2){
                        cadre5.innerHTML = cadre5.innerHTML + ('Il'+' '+aux[i]+' '+r+'é'+"<br>");
                    }
                    cadre5.innerHTML = cadre5.innerHTML + '-'+'<br>'
                }
            }
        }
        else if (v == 'falloir'){
            for(i=0 ; i<5 ; i++){
                if (i==2){
                    cadre5.innerHTML = cadre5.innerHTML + ('Il'+' '+aux[2]+' '+ 'fallu'+"<br>");
                }
                cadre5.innerHTML = cadre5.innerHTML + '-'+'<br>'
            }
        }
        else {
            for(i=0 ; i<6 ; i++) {
                cadre5.innerHTML = cadre5.innerHTML + (p[i]+' '+aux[i]+' '+ r +t+"<br>");
            }
        }
    }

    function plus_que_parfait(){
        var cadre6 = document.getElementById('cadre6');
        var v = verb.value.toLowerCase();
        var p = new Array(' J\'',' Tu',' Il/Elle',' Nous',' Vous',' Ils/Elles');
        var aux = ['avais','avais','avait','avions','aviez','avaient'];
        if (v.indexOf('se ') == 0 ) {
			v = v.replace(/se /,'');
			je ='Je me';
			p = [je,'Tu t\' ','Il/Elle s\' ','Nous nous','Vous vous','Ils/Elles se'];
            aux = ['étais','étais','était','étions','étiez','étaient'];
		}
		else if ( v.indexOf('s\'') == 0 ) {
			v = v.replace(/s\'/,'');
			je ='Je me';
			p = [je,'Tu t\' ','Il/Elle s\' ','Nous nous','Vous vous','Ils/Elles se'];
            aux = ['étais','étais','était','étions','étiez','étaient'];
		}
        if (groupe == 1){
            if (v == 'rester') {
                p = [' Je',' Tu',' Il/Elle',' Nous',' Vous',' Ils/Elles'];
                aux = ['étais','étais','était','étions','étiez','étaient'];
                var t = 'é';
            }
            else {
                var t = 'é';
            }
        }
        else if (groupe == 2) {
			if (v.lastIndexOf('ïr')!=-1){
				var t = 'ï';
			}
			else {
                var t = 'i';
			}
        }
        else if (groupe == 3) {
            if (v.lastIndexOf('evoir')!=-1 || v.lastIndexOf('évoir')!=-1){
				if (v.lastIndexOf('cevoir')!=-1){
                    v = v.substring(0,v.length-4);
					var t = 'çu';
				}
				else if (v == 'devoir') {
					v = v.substring(0,v.length-3);
					var t = 'û';
				}
				else {
				    v = v.substring(0,v.length-1);
                    var t = 'u';
				}
            }
			else if (v == 'aller'){
				p = ['Je','Tu','Il/Elle','Nous','Vous','Ils/Elles'];
                aux = ['étais','étais','était','étions','étiez','étaient'];
				t = 'é';
			}
			else if (v == 'voir'){
				v = v.substring(0,v.length-1);
				t = 'u';
			}
			else if (v == 'fuir'){
				t = 'i';
			}
			else if (v == 'savoir'){
				v = v.substring(0,v.length-3);
				t = 'u'
			}
			else if (v == 'avoir'){
				v = v.substring(0,v.length-3);
				t = 'eu';
			}
			else if (v == 'bouillir'){
				t = 'i';
			}
            else if (v.lastIndexOf('mettre')!=-1){
                v = v.substring(0,v.length-3);
                var t = 'is';
            }
			else if (v.lastIndexOf('ordre')!=-1){
                var t = 'u';
            }
            else if (v.lastIndexOf('enir')!=-1){
                if (v.lastIndexOf('venir')!=-1){
                    p = ['Je','Tu','Il/Elle','Nous','Vous','Ils/Elles'];
                    aux = ['avais','avais','avait','avions','aviez','avaient'];
                    var t = 'u';
                }
                else {
                    var t = 'u';
                }
            }
            else if(v.lastIndexOf('voir')!=-1) {
                if (v== 'mouvoir') {
					v = v.substring(0,v.length-4);
					var t = 'û';
				}
				else if (v.lastIndexOf('ouvoir')!=-1) {
					v = v.substring(0,v.length-4);
					var t = 'u';
				}
				else {
					var t = 'u';
				}
            }
            else if(v.lastIndexOf('oire')!=-1){
                v = v.substring(0,v.length-2);
                var t = 'u';
            }
            else if (v.lastIndexOf('faire')!=-1){
                v = v.substring(0,v.length-2);
                var t = 'ait';
            }
            else if (v.lastIndexOf('rir')==v.length-3){
                if (v.lastIndexOf('courir')!=-1){
                    var t = 'u';
                }
                else if (v == 'mourir'){
                    v = v.substring(0,v.length-4);
                    p = ['Je','Tu','Il/Elle','Nous','Vous','Ils/Elles'];
                    aux = 'serait';
                    var t = 'mort';
                } 
                else {
                    var t = 'u';
                }
                
            }
            else if (v.lastIndexOf('oudre')!=-1){
                if (v.lastIndexOf('moudre')!=-1){
                    v = v.substring(0,v.length-1);
                    var t = 'lu'; 
                }
                else if(v.lastIndexOf('soudre')!=-1){
                    v = v.substring(0,v.length-2);
                    var t = 'lu';
                }
                else if(v.lastIndexOf('coudre')!=-1){
                    v = v.substring(0,v.length-1);
                    var t = 'su';
                }
                
            }
			else if (v.lastIndexOf('indre')!=-1){
				 v = v.substring(0,v.length-2);
                 var t = 'nt';
			}
            else if (v.lastIndexOf('outre')!=-1){
                v = v.substring(0,v.length-1);
                var t = 'tu';
            }
			else if (v.lastIndexOf('aître')!=-1 || v.lastIndexOf('aitre')!=-1){
                if (v == 'naitre' || v == 'naître'){

                }
                v = v.substring(0,v.length-3);
                var t = 'ru';
            }
            else if (v.lastIndexOf('ivre')!=-1){
                v = v.substring(0,v.length-2);
                var t = 'écu';
            }
            else if (v.lastIndexOf('ire')!=-1){
				if (v.lastIndexOf('dire')!=-1) {
					v = v.substring(0,v.length-1);
					var t = 'it';
				}
                else if (v == 'frire') {
                    v = v.substring(0,v.length-1);
					var t = 'it';
                }
				else if (v == 'rire') {
                    v = v.substring(0,v.length-1);
                    var t = 'i';
				}
				else if (v== 'nuire'){
                    v = v.substring(0,v.length-1);
                    var t = 'i';
				}
				else {
				    v = v.substring(0,v.length-1);
                    var t = 'it';
				}
            }
            else if (v.lastIndexOf('tir')!=-1){
                var t = 'i';
            }
            else if (v.lastIndexOf('dre')!=-1){
                var t = 'u';
            }
			else if (v == 'etre' || v == 'être'){
				v = v.substring(0,v.length-2);
				p = ['J\'','Tu','Il/Elle','Nous','Vous','Ils/Elles'];
				t = 'été';
			}
			else if (v.lastIndexOf('eoir')==v.length-4) {
				v = v.substring(0,v.length-2);
                t = 'is';
			}
			else if ( v.lastIndexOf('ouloir')!=-1 ) {
				v = v.substring(0,v.length-2);
				t = 'lu';
			}
            else {
                t = 'i';
            }
        }
        var r = v.substring(0,v.length-2);
        cadre6.innerHTML = "<u> <center> Plus que Parfait </center><br></u>";
        if (v.indexOf('pleuv')!=-1) {
            if (v == 'pleuvoir'){
                for(i=0 ; i<5 ; i++){
                    if (i==2){
                        cadre6.innerHTML = cadre6.innerHTML + ('Il'+' '+aux[i]+' '+ 'plu'+"<br>");
                    }
                    cadre6.innerHTML = cadre6.innerHTML + '-'+'<br>'
                }
            }
            else if(groupe == 1){
                for(i=0 ; i<5 ; i++){
                    if (i==2){
                        cadre6.innerHTML = cadre6.innerHTML + ('Il'+' '+aux[i]+' '+r+'é'+"<br>");
                    }
                    cadre6.innerHTML = cadre6.innerHTML + '-'+'<br>'
                }
            }
        }
        else if (v == 'falloir'){
            for(i=0 ; i<5 ; i++){
                if (i==2){
                    cadre6.innerHTML = cadre6.innerHTML + ('Il'+' '+aux[i]+' '+ 'fallu'+"<br>");
                }
                cadre6.innerHTML = cadre6.innerHTML + '-'+'<br>'
            }
        }
        else {
            for(i=0 ; i<6 ; i++) {
                cadre6.innerHTML = cadre6.innerHTML + (p[i]+' '+aux[i]+' '+ r +t+"<br>");
            }
        }
    }

    function Conditionnel_present(){
        var cadre7 = document.getElementById('cadre7');
        var v = verb.value.toLowerCase();
        group(v);
        je="Je";
        if (v[0]=='a'||v[0]=='e'||v[0]=='é'||v[0]=='y'||v[0]=='u'|v[0]=='i'||v[0]=='o'){
            je="J'";
        }
        var p = new Array(je,' Tu',' Il/Elle',' Nous',' Vous',' Ils/Elles');
		if (v.indexOf('se ') == 0 ) {
			v = v.replace(/se /,'');
			je ='Je me';
			p = [je,'Tu te ','Il/Elle se ','Nous nous','Vous vous','Ils/Elles se'];
		}
		else if ( v.indexOf('s\'') == 0 ) {
			v = v.replace(/s\'/,'');
			je ='Je m\'';
			p = [je,'Tu t\' ','Il/Elle s\' ','Nous nous','Vous vous','Ils/Elles s\''];
		}
        if (groupe == 1){
            if (v.lastIndexOf('yer')!=-1){
                v = v.substring(0,v.length-1);
                var t = ['ierais','ierais','ierait','ierions','ieriez','ieraient'];
            }
            else if (v.lastIndexOf('ger')!=-1){
                v = v.substring(0,v.length-1);
                var t = ['gerais','gerais','gerait','gerions','geriez','geraient'];
            }
			else if (v.lastIndexOf('cer')!=-1){
                v = v.substring(0,v.length-1);
                var t = ['cerais','cerais','cerait','çerions','ceriez','ceraient'];
            }
            else {
                var t = ['erais','erais','erait','erions','eriez','eraient'];
            }
        }
        else if (groupe == 2) {
			if (v.lastIndexOf('ïr')!=-1){
				var t = ['ïrais','ïrais','ïrait','ïrions','ïriez','ïraient'];
			}
			else {
            var t = ['irais','irais','irait','irions','iriez','iraient'];
			}
        }
        else if (groupe == 3){
            if (v.lastIndexOf('evoir')!=-1 || v.lastIndexOf('évoir')!=-1){
				if (v.lastIndexOf('cevoir')!=-1){
					v = v.substring(0,v.length-4);
					var t = ['cevrais','cevrais','cevrait','cevrions','cevriez','cevraient'];
				}
				else {
				v = v.substring(0,v.length-2);
                var t = ['vrais','vrais','vrait','vrions','vriez','vraient'];
				}
            }
			else if (v == 'aller'){
				v = v.substring(0,v.length-3);
				t = ['irais','irais','irait','irions','iriez','iraient'];
			}
			else if (v == 'voir'){
				v = v.substring(0,v.length-1);
				t = ['errais','errais','errait','errions','erriez','erraient'];
			}
			else if (v == 'fuir'){
				t = ['irais','irais','irait','irions','iriez','iraient'];
			}
			else if (v == 'savoir'){
				v = v.substring(0,v.length-3);
				t = ['aurais','aurais','aurait','aurions','auriez','auraient'];
			}
			else if (v == 'avoir'){
				v = v.substring(0,v.length-3);
				t = ['aurais','aurais','aurait','aurions','auriez','auraient'];
			}
			else if (v == 'bouillir'){
				v = v.substring(0,v.length-3);
				t = ['illirais','illirais','illirait','illirions','illiriez','illiraient'];
			}
            else if (v.lastIndexOf('mettre')!=-1){
                var t = ['rais','rais','rait','rions','riez','raient'];
            }
			else if (v.lastIndexOf('ordre')!=-1){
                v = v.substring(0,v.length-1);
                var t = ['drais','drais','drait','drions','driez','draient'];
            }
            else if (v.lastIndexOf('enir')!=-1){
                v = v.substring(0,v.length-2);
                var t = ['iendrais','iendrais','iendrait','iendrions','iendriez','iendraient'];
            }
            else if(v.lastIndexOf('voir')!=-1) {
				if (v == 'pouvoir') {
					v = v.substring(0,v.length-2);
					var t = ['rrais','rrais','rrait','rrions','rriez','rraient'];
				}
				else if (v.lastIndexOf('mouvoir')!=-1) {
					v = v.substring(0,v.length-4);
					var t = ['ouvrais','ouvrais','ouvrait','ouvrions','ouvriez','ouvraient'];
				}
				else {
					v = v.substring(0,v.length-2);
					var t = ['ouvrais','ouvrais','ouvrait','ouvrions','ouvriez','ouvraient'];
				}
            }
            else if(v.lastIndexOf('oire')!=-1){
                v = v.substring(0,v.length-2);
                var t = ['oirais','oirais','oirait','oirions','oiriez','oiraient'];
            }
            else if (v.lastIndexOf('faire')!=-1){
                v = v.substring(0,v.length-2);
                var t = ['erais','erais','erait','erions','eriez','eraient'];
            }
            else if (v.lastIndexOf('rir')==v.length-3){
                if (v.lastIndexOf('courir')!=-1){
                    v = v.substring(0,v.length-1);
                    var t = ['rrais','rrais','rrait','rrions','rriez','rraient'];
                }
                else if (v.lastIndexOf('mourir')!=-1){
                    v = v.substring(0,v.length-1);
                    var t = ['rrais','rrais','rrait','rrions','rriez','rraient'];
                } 
                else {
                    v = v.substring(0,v.length-1);
                    var t = ['rrais','rrais','rrait','rrions','rriez','rraient'];
                }
                
            }
            else if (v.lastIndexOf('oudre')!=-1){
                v = v.substring(0,v.length-1);
                var t = ['drais','drais','drait','drions','driez','draient']; 
            }
			else if (v.lastIndexOf('indre')!=-1){
				v = v.substring(0,v.length-1);
                var t = ['drais','drais','drait','drions','driez','draient']; 
			}
            else if (v.lastIndexOf('outre')!=-1){
                v = v.substring(0,v.length-1);
                var t = ['trais','trais','trait','trions','triez','traient'];
            }
			else if (v.lastIndexOf('aître')!=-1 || v.lastIndexOf('aitre')!=-1){
                v = v.substring(0,v.length-3);
                var t = ['aîtrais','aîtrais','aîtrait','aîtrions','aîtriez','aîtraient'];
            }
            else if (v.lastIndexOf('ivre')!=-1){
                v = v.substring(0,v.length-1);
                var t = ['vrais','vrais','vrait','vrions','vriez','vraient'];
            }
            else if (v.lastIndexOf('ire')!=-1){
				if (v.lastIndexOf('dire')!=-1) {
					v = v.substring(0,v.length-1);
					var t = ['irais','irais','irait','irions','iriez','iraient'];
				}
                else if (v == 'frire') {
                    v = v.substring(0,v.length-3);
                    p = [je,'Tu','Il/Elle','-','-','-'];
                    var t = ['frirais','frirais','frirait','','',''];
                }
				else if (v.lastIndexOf('uire')==v.length-4){
                    v = v.substring(0,v.length-1);
                    var t = ['irais','irais','irait','irions','iriez','iraient'];
				}
				else {
				    v = v.substring(0,v.length-1);
                    var t = ['irais','irais','irait','irions','iriez','iraient'];
				}
            }
            else if (v.lastIndexOf('tir')!=-1){
				var t = ['irais','irais','irait','irions','iriez','iraient'];
            }
            else if (v.lastIndexOf('dre')!=-1){
                var t = ['rais','rais','rait','rions','riez','raint'];
            }
			else if (v == 'etre' || v == 'être'){
				v = v.substring(0,v.length-2);
				p = ['Je','Tu','Il/Elle','Nous','Vous','Ils/Elles'];
				t = ['serais','serais','serait','serions','seriez','seraient'];
			}
			else if (v.lastIndexOf('eoir')==v.length-4) {
				v = v.substring(0,v.length-2);
				t = ['oirais','oirais','oirait','oirions','oiriez','oiraient'];
			}
			else if ( v.lastIndexOf('ouloir')!=-1 ) {
                v = v.substring(0,v.length-2);
				var t = ['drais','drais','drait','drions','driez','draient'];
			}
			else if ( v.lastIndexOf('vir')!=-1) {
				var t = ['irais','irais','irait','irions','iriez','iraient'];
			}
			else if (v.lastIndexOf('rmir')!=-1) {
				var t = ['irais','irais','irait','irions','iriez','iraient'];
			}
            else if (v =='falloir'){
                v=v;
            }
            else {
                v = v.substring(0,v.length-1);
                var t = ['irais','irais','irait','irions','iriez','iraient'];
            }
        }
        var r = v.substring(0,v.length-2);
        cadre7.innerHTML = "<u> <center> Conditionnel Présent </center><br></u>";
        if (v =='falloir'){
            for(i=0 ; i<5 ; i++){
                if (i==2){
                    cadre7.innerHTML = cadre7.innerHTML + ('Il'+' '+'faudrait'+"<br>");
                }
                cadre7.innerHTML = cadre7.innerHTML + '-'+'<br>'
            }
        }
        else if (v.indexOf('pleuv')!=-1) {
			if (groupe == 3) {
                p = ['-','-','Il','-','-','-'];
                var t = ['','',' pleuvrait','','',''];
                for(i=0 ; i<6 ; i++) {
                cadre7.innerHTML = cadre7.innerHTML + (' '+p[i] +t[i] +"<br>");
                }
            }
            else if (groupe == 1) {
                p = ['-','-','Il','-','-','-'];
                var t = ['','',' '+r+'erait','','',''];
                for(i=0 ; i<6 ; i++) {
                cadre7.innerHTML = cadre7.innerHTML + (' '+p[i] +t[i] +"<br>");
                }
            }
			
        }
		else {
            for(i=0 ; i<6 ; i++) {
		    cadre7.innerHTML = cadre7.innerHTML + (p[i]+' '+ r +t[i] +"<br>");
            }
		}
    }

    function passe_anterieur(){
        var cadre8 = document.getElementById('cadre8');
        var v = verb.value.toLowerCase();
        var p = new Array(' J\'',' Tu',' Il/Elle',' Nous',' Vous',' Ils/Elles');
        var aux =new  Array('eus','eus','eut','eûmes','eûtes','eurent'); 
        if (v.indexOf('se ') == 0 ) {
			v = v.replace(/se /,'');
			je ='Je me';
			p = [je,'Tu t\' ','Il/Elle s\' ','Nous nous','Vous vous','Ils/Elles se'];
            aux = ['fus','fus','fut','fûmes','fûtes','furent'];
		}
		else if ( v.indexOf('s\'') == 0 ) {
			v = v.replace(/s\'/,'');
			je ='Je me';
			p = [je,'Tu t\' ','Il/Elle s\' ','Nous nous','Vous vous','Ils/Elles se'];
            aux = ['fus','fus','fut','fûmes','fûtes','furent'];
		}
        if (groupe == 1){
            if (v == 'rester') {
                p = [' Je',' Tu',' Il/Elle',' Nous',' Vous',' Ils/Elles'];
                aux = ['fus','fus','fut','fûmes','fûtes','furent'];
                var t = 'é';
            }
            else {
                var t = 'é';
            }
        }
        else if (groupe == 2) {
			if (v.lastIndexOf('ïr')!=-1){
				var t = 'ï';
			}
			else {
                var t = 'i';
			}
        }
        else if (groupe == 3) {
            if (v.lastIndexOf('evoir')!=-1 || v.lastIndexOf('évoir')!=-1){
				if (v.lastIndexOf('cevoir')!=-1){
                    v = v.substring(0,v.length-4);
					var t = 'çu';
				}
				else if (v == 'devoir') {
					v = v.substring(0,v.length-3);
					var t = 'û';
				}
				else {
				    v = v.substring(0,v.length-1);
                    var t = 'u';
				}
            }
			else if (v == 'aller'){
				p = ['Je','Tu','Il/Elle','Nous','Vous','Ils/Elles'];
                aux = ['fus','fus','fut','fûmes','fûtes','furent'];
				t = 'é';
			}
			else if (v == 'voir'){
				v = v.substring(0,v.length-1);
				t = 'u';
			}
			else if (v == 'fuir'){
				t = 'i';
			}
			else if (v == 'savoir'){
				v = v.substring(0,v.length-3);
				t = 'u'
			}
			else if (v == 'avoir'){
				v = v.substring(0,v.length-3);
				t = 'eu';
			}
			else if (v == 'bouillir'){
				t = 'i';
			}
            else if (v.lastIndexOf('mettre')!=-1){
                v = v.substring(0,v.length-3);
                var t = 'is';
            }
			else if (v.lastIndexOf('ordre')!=-1){
                var t = 'u';
            }
            else if (v.lastIndexOf('enir')!=-1){
                if (v.lastIndexOf('venir')!=-1){
                    p = ['Je','Tu','Il/Elle','Nous','Vous','Ils/Elles'];
                    aux = ['fus','fus','fut','fûmes','fûtes','furent'];
                    var t = 'u';
                }
                else {
                    var t = 'u';
                }
            }
            else if(v.lastIndexOf('voir')!=-1) {
                if (v== 'mouvoir') {
					v = v.substring(0,v.length-4);
					var t = 'û';
				}
				else if (v.lastIndexOf('ouvoir')!=-1) {
					v = v.substring(0,v.length-4);
					var t = 'u';
				}
				else {
					var t = 'u';
				}
            }
            else if(v.lastIndexOf('oire')!=-1){
                v = v.substring(0,v.length-2);
                var t = 'u';
            }
            else if (v.lastIndexOf('faire')!=-1){
                v = v.substring(0,v.length-2);
                var t = 'ait';
            }
            else if (v.lastIndexOf('rir')==v.length-3){
                if (v.lastIndexOf('courir')!=-1){
                    var t = 'u';
                }
                else if (v == 'mourir'){
                    v = v.substring(0,v.length-4);
                    p = ['Je','Tu','Il/Elle','Nous','Vous','Ils/Elles'];
                    aux = ['fus','fus','fut','fûmes','fûtes','furent'];
                    var t = 'mort';
                } 
                else {
                    var t = 'u';
                }
                
            }
            else if (v.lastIndexOf('oudre')!=-1){
                if (v.lastIndexOf('moudre')!=-1){
                    v = v.substring(0,v.length-1);
                    var t = 'lu'; 
                }
                else if(v.lastIndexOf('soudre')!=-1){
                    v = v.substring(0,v.length-2);
                    var t = 'lu';
                }
                else if(v.lastIndexOf('coudre')!=-1){
                    v = v.substring(0,v.length-1);
                    var t = 'su';
                }
                
            }
			else if (v.lastIndexOf('indre')!=-1){
				 v = v.substring(0,v.length-2);
                 var t = 'nt';
			}
            else if (v.lastIndexOf('outre')!=-1){
                v = v.substring(0,v.length-1);
                var t = 'tu';
            }
			else if (v.lastIndexOf('aître')!=-1 || v.lastIndexOf('aitre')!=-1){
                if (v == 'naitre' || v == 'naître'){

                }
                v = v.substring(0,v.length-3);
                var t = 'ru';
            }
            else if (v.lastIndexOf('ivre')!=-1){
                v = v.substring(0,v.length-2);
                var t = 'écu';
            }
            else if (v.lastIndexOf('ire')!=-1){
				if (v.lastIndexOf('dire')!=-1) {
					v = v.substring(0,v.length-1);
					var t = 'it';
				}
                else if (v == 'frire') {
                    v = v.substring(0,v.length-1);
					var t = 'it';
                }
				else if (v == 'rire') {
                    v = v.substring(0,v.length-1);
                    var t = 'i';
				}
				else if (v== 'nuire'){
                    v = v.substring(0,v.length-1);
                    var t = 'i';
				}
				else {
				    v = v.substring(0,v.length-1);
                    var t = 'it';
				}
            }
            else if (v.lastIndexOf('tir')!=-1){
                var t = 'i';
            }
            else if (v.lastIndexOf('dre')!=-1){
                var t = 'u';
            }
			else if (v == 'etre' || v == 'être'){
				v = v.substring(0,v.length-2);
				p = ['J\'','Tu','Il/Elle','Nous','Vous','Ils/Elles'];
				t = 'été';
			}
			else if (v.lastIndexOf('eoir')==v.length-4) {
				v = v.substring(0,v.length-2);
                t = 'is';
			}
			else if ( v.lastIndexOf('ouloir')!=-1 ) {
				v = v.substring(0,v.length-2);
				t = 'lu';
			}
            else {
                t = 'i';
            }
        }
        var r = v.substring(0,v.length-2);
        cadre8.innerHTML = "<u> <center> Passé Antérieur </center><br></u>";
        if (v.indexOf('pleuv')!=-1) {
            if (v == 'pleuvoir'){
                for(i=0 ; i<5 ; i++){
                    if (i==2){
                        cadre8.innerHTML = cadre8.innerHTML + ('Il'+' '+aux[2]+' '+ 'plu'+"<br>");
                    }
                    cadre8.innerHTML = cadre8.innerHTML + '-'+'<br>'
                }
            }
            else if(groupe == 1){
                for(i=0 ; i<5 ; i++){
                    if (i==2){
                        cadre8.innerHTML = cadre8.innerHTML + ('Il'+' '+aux[2]+' '+r+'é'+"<br>");
                    }
                    cadre8.innerHTML = cadre8.innerHTML + '-'+'<br>'
                }
            }
        }
        else if (v == 'falloir'){
            for(i=0 ; i<5 ; i++){
                if (i==2){
                    cadre8.innerHTML = cadre8.innerHTML + ('Il'+' '+aux[2]+' '+ 'fallu'+"<br>");
                }
                cadre8.innerHTML = cadre8.innerHTML + '-'+'<br>'
            }
        }
        else {
            for(i=0 ; i<6 ; i++) {
                cadre8.innerHTML = cadre8.innerHTML + (p[i]+' '+aux[i]+' '+ r +t+"<br>");
            }
        }
    }

    function futur_anterieur(){
        var cadre9 = document.getElementById('cadre9');
        var v = verb.value.toLowerCase();
        var p = new Array(' J\'',' Tu',' Il/Elle',' Nous',' Vous',' Ils/Elles');
        var aux =new  Array('aurai','auras','aura','aurons','aurez','auront'); 
        if (v.indexOf('se ') == 0 ) {
			v = v.replace(/se /,'');
			je ='Je me';
			p = [je,'Tu t\' ','Il/Elle s\' ','Nous nous','Vous vous','Ils/Elles se'];
            aux =['serais','seras','sera','serons','serez','seront'];
		}
		else if ( v.indexOf('s\'') == 0 ) {
			v = v.replace(/s\'/,'');
			je ='Je me';
			p = [je,'Tu t\' ','Il/Elle s\' ','Nous nous','Vous vous','Ils/Elles se'];
            aux =['serais','seras','sera','serons','serez','seront'];
		}
        if (groupe == 1){
            if (v == 'rester') {
                p = [' Je',' Tu',' Il/Elle',' Nous',' Vous',' Ils/Elles'];
                aux = ['serais','seras','sera','serons','serez','seront'];
                var t = 'é';
            }
            else {
                var t = 'é';
            }
        }
        else if (groupe == 2) {
			if (v.lastIndexOf('ïr')!=-1){
				var t = 'ï';
			}
			else {
                var t = 'i';
			}
        }
        else if (groupe == 3) {
            if (v.lastIndexOf('evoir')!=-1 || v.lastIndexOf('évoir')!=-1){
				if (v.lastIndexOf('cevoir')!=-1){
                    v = v.substring(0,v.length-4);
					var t = 'çu';
				}
				else if (v == 'devoir') {
					v = v.substring(0,v.length-3);
					var t = 'û';
				}
				else {
				    v = v.substring(0,v.length-1);
                    var t = 'u';
				}
            }
			else if (v == 'aller'){
				p = ['Je','Tu','Il/Elle','Nous','Vous','Ils/Elles'];
                aux =['serais','seras','sera','serons','serez','seront'];
				t = 'é';
			}
			else if (v == 'voir'){
				v = v.substring(0,v.length-1);
				t = 'u';
			}
			else if (v == 'fuir'){
				t = 'i';
			}
			else if (v == 'savoir'){
				v = v.substring(0,v.length-3);
				t = 'u'
			}
			else if (v == 'avoir'){
				v = v.substring(0,v.length-3);
				t = 'eu';
			}
			else if (v == 'bouillir'){
				t = 'i';
			}
            else if (v.lastIndexOf('mettre')!=-1){
                v = v.substring(0,v.length-3);
                var t = 'is';
            }
			else if (v.lastIndexOf('ordre')!=-1){
                var t = 'u';
            }
            else if (v.lastIndexOf('enir')!=-1){
                if (v.lastIndexOf('venir')!=-1){
                    p = ['Je','Tu','Il/Elle','Nous','Vous','Ils/Elles'];
                    aux = ['serais','seras','sera','serons','serez','seront'];
                    var t = 'u';
                }
                else {
                    var t = 'u';
                }
            }
            else if(v.lastIndexOf('voir')!=-1) {
                if (v== 'mouvoir') {
					v = v.substring(0,v.length-4);
					var t = 'û';
				}
				else if (v.lastIndexOf('ouvoir')!=-1) {
					v = v.substring(0,v.length-4);
					var t = 'u';
				}
				else {
					var t = 'u';
				}
            }
            else if(v.lastIndexOf('oire')!=-1){
                v = v.substring(0,v.length-2);
                var t = 'u';
            }
            else if (v.lastIndexOf('faire')!=-1){
                v = v.substring(0,v.length-2);
                var t = 'ait';
            }
            else if (v.lastIndexOf('rir')==v.length-3){
                if (v.lastIndexOf('courir')!=-1){
                    var t = 'u';
                }
                else if (v == 'mourir'){
                    v = v.substring(0,v.length-4);
                    p = ['Je','Tu','Il/Elle','Nous','Vous','Ils/Elles'];
                    aux = ['serais','seras','sera','serons','serez','seront'];
                    var t = 'mort';
                } 
                else {
                    var t = 'u';
                }
                
            }
            else if (v.lastIndexOf('oudre')!=-1){
                if (v.lastIndexOf('moudre')!=-1){
                    v = v.substring(0,v.length-1);
                    var t = 'lu'; 
                }
                else if(v.lastIndexOf('soudre')!=-1){
                    v = v.substring(0,v.length-2);
                    var t = 'lu';
                }
                else if(v.lastIndexOf('coudre')!=-1){
                    v = v.substring(0,v.length-1);
                    var t = 'su';
                }
                
            }
			else if (v.lastIndexOf('indre')!=-1){
				 v = v.substring(0,v.length-2);
                 var t = 'nt';
			}
            else if (v.lastIndexOf('outre')!=-1){
                v = v.substring(0,v.length-1);
                var t = 'tu';
            }
			else if (v.lastIndexOf('aître')!=-1 || v.lastIndexOf('aitre')!=-1){
                if (v == 'naitre' || v == 'naître'){

                }
                v = v.substring(0,v.length-3);
                var t = 'ru';
            }
            else if (v.lastIndexOf('ivre')!=-1){
                v = v.substring(0,v.length-2);
                var t = 'écu';
            }
            else if (v.lastIndexOf('ire')!=-1){
				if (v.lastIndexOf('dire')!=-1) {
					v = v.substring(0,v.length-1);
					var t = 'it';
				}
                else if (v == 'frire') {
                    v = v.substring(0,v.length-1);
					var t = 'it';
                }
				else if (v == 'rire') {
                    v = v.substring(0,v.length-1);
                    var t = 'i';
				}
				else if (v== 'nuire'){
                    v = v.substring(0,v.length-1);
                    var t = 'i';
				}
				else {
				    v = v.substring(0,v.length-1);
                    var t = 'it';
				}
            }
            else if (v.lastIndexOf('tir')!=-1){
                var t = 'i';
            }
            else if (v.lastIndexOf('dre')!=-1){
                var t = 'u';
            }
			else if (v == 'etre' || v == 'être'){
				v = v.substring(0,v.length-2);
				p = ['J\'','Tu','Il/Elle','Nous','Vous','Ils/Elles'];
				t = 'été';
			}
			else if (v.lastIndexOf('eoir')==v.length-4) {
				v = v.substring(0,v.length-2);
                t = 'is';
			}
			else if ( v.lastIndexOf('ouloir')!=-1 ) {
				v = v.substring(0,v.length-2);
				t = 'lu';
			}
            else {
                t = 'i';
            }
        }
        var r = v.substring(0,v.length-2);
        cadre9.innerHTML = "<u> <center> Futur Antérieur </center><br></u>";
        if (v.indexOf('pleuv')!=-1) {
            if (v == 'pleuvoir'){
                for(i=0 ; i<5 ; i++){
                    if (i==2){
                        cadre9.innerHTML = cadre9.innerHTML + ('Il'+' '+aux[i]+' '+ 'plu'+"<br>");
                    }
                    cadre9.innerHTML = cadre9.innerHTML + '-'+'<br>'
                }
            }
            else if(groupe == 1){
                for(i=0 ; i<5 ; i++){
                    if (i==2){
                        cadre9.innerHTML = cadre9.innerHTML + ('Il'+' '+aux[i]+' '+r+'é'+"<br>");
                    }
                    cadre9.innerHTML = cadre9.innerHTML + '-'+'<br>'
                }
            }
        }
        else if (v == 'falloir'){
            for(i=0 ; i<5 ; i++){
                if (i==2){
                    cadre9.innerHTML = cadre9.innerHTML + ('Il'+' '+aux[i]+' '+ 'fallu'+"<br>");
                }
                cadre9.innerHTML = cadre9.innerHTML + '-'+'<br>'
            }
        }
        else {
            for(i=0 ; i<6 ; i++) {
                cadre9.innerHTML = cadre9.innerHTML + (p[i]+' '+aux[i]+' '+ r +t+"<br>");
            }
        }
    }

    function subjonctif_present(){
        var cadre10 = document.getElementById('cadre10');
        var v = verb.value.toLowerCase();
        group(v);
        je="Je";
        if (v[0]=='a'||v[0]=='e'||v[0]=='é'||v[0]=='y'||v[0]=='u'|v[0]=='i'||v[0]=='o'){
            je="j'";
        }
        var p = new Array(je,' tu',' il/elle',' nous',' vous',' ils/elles');
		if (v.indexOf('se ') == 0 ) {
			v = v.replace(/se /,'');
			je ='je me';
			p = [je,'tu te ','il/elle se ','nous nous','vous vous','ils/elles se'];
		}
		else if ( v.indexOf('s\'') == 0 ) {
			v = v.replace(/s\'/,'');
			je ='Je m\'';
			p = [je,'tu t\' ','il/elle s\' ','nous nous','vous vous','ils/elles s\''];
		}
        if (groupe == 1){
            if (v.lastIndexOf('yer')!=-1){
                v = v.substring(0,v.length-1);
                var t = ['ie','ies','ie','yions','yiez','ient'];
            }
            else if (v.lastIndexOf('ger')!=-1){
                v = v.substring(0,v.length-1);
                var t = ['ge','ges','ge','gions','giez','gent'];
            }
			else if (v.lastIndexOf('cer')!=-1){
                v = v.substring(0,v.length-1);
                var t = ['ce','ces','ce','cions','ciez','cent'];
            }
            else {
                var t = ['e','es','e','ions','iez','ent'];
            }
        }
        else if (groupe == 2) {
			if (v.lastIndexOf('ïr')!=-1){
				var t = ['is','is','it','ïssions','ïssiez','ïssent'];
			}
			else {
            var t = ['isse','isses','isse','issions','issiez','issent'];
			}
        }
        else if (groupe == 3) {
            if (v.lastIndexOf('evoir')!=-1 || v.lastIndexOf('évoir')!=-1){
				if (v.lastIndexOf('cevoir')!=-1){
					v = v.substring(0,v.length-4);
					var t = ['çoive','çoives','çoive','cevions','ceviez','çoivent'];
				}
				else if (v == 'devoir') {
					v = v.substring(0,v.length-3);
					var t = ['oive','oives','oive','evions','eviez','oivent'];
				}
				else {
				v = v.substring(0,v.length-1);
                var t = ['oie','oies','oie','oyions','oyiez','oient'];
				}
            }
			else if (v == 'aller'){
				v = v.substring(0,v.length-3);
				p = ['j\'','tu','il/elle','nous','vous','ils/elles'];
				t = ['aille','ailles','aille','allions','alliez','aillent'];
			}
			else if (v == 'voir'){
				v = v.substring(0,v.length-1);
				t = ['ois','oies','oie','oyions','oyiez','oient'];
			}
			else if (v == 'fuir'){
				t = ['ie','ies','ie','yions','yiez','ient'];
			}
			else if (v == 'savoir'){
				v = v.substring(0,v.length-3);
				t = ['ache','aches','ache','achions','achiez','achent'];
			}
			else if (v == 'avoir'){
				v = v.substring(0,v.length-3);
                p = ['j\'','tu','il/elle','nous','vous','ils/elles'];
				t = ['aie','aies','ait','ayons','ayez','aient'];
			}
			else if (v == 'bouillir'){
				v = v.substring(0,v.length-2);
				t = ['ille','ille','ille','illions','illiez','illent'];
			}
            else if (v.lastIndexOf('mettre')!=-1){
                v = v.substring(0,v.length-1);
                var t = ['te','tes','te','tions','tiez','tent'];
            }
			else if (v.lastIndexOf('ordre')!=-1){
                v = v.substring(0,v.length-1);
                var t = ['de','des','de','dions','diez','dent'];
            }
            else if (v.lastIndexOf('enir')!=-1){
                v = v.substring(0,v.length-2);
                var t = ['ienne','iennes','ienne','enions','eniez','innent'];
            }
            else if(v.lastIndexOf('voir')!=-1) {
				if (v.lastIndexOf('ouvoir')!=-1 && v.lastIndexOf('mouvoir')==-1) {
					v = v.substring(0,v.length-4);
					var t = ['uisse','uisses','uisse','uissions','uissiez','uissent'];
				}
				else if (v== 'mouvoir') {
					v = v.substring(0,v.length-4);
					var t = ['euve','euves','euve','ouvions','ouviez','euvent'];
				}
				else {
					v = v.substring(0,v.length-2);
					var t = ['euve','euves','euve','ouvions','ouviez','euvent'];
				}
            }
            else if(v.lastIndexOf('oire')!=-1){
                v = v.substring(0,v.length-2);
                var t = ['oive','oives','oive','uvions','uviez','oivent'];
            }
            else if (v.lastIndexOf('faire')!=-1){
                v = v.substring(0,v.length-2);
                var t = ['asse','asse','asse','assions','assiez','assent'];
            }
            else if (v.lastIndexOf('rir')==v.length-3){
                if (v.lastIndexOf('courir')!=-1){
                    v = v.substring(0,v.length-1);
                    var t = ['re','res','re','rions','riez','rent'];
                }
                else if (v.lastIndexOf('mourir')!=-1){
                    v = v.substring(0,v.length-3);
                    var t = ['eure','eures','eure','ourions','ouriez','eurent'];
                } 
                else {
                    v = v.substring(0,v.length-1);
                    var t = ['re','res','re','rions','riez','rent'];
                }
                
            }
            else if (v.lastIndexOf('oudre')!=-1){
                if (v.lastIndexOf('moudre')!=-1){
                    v = v.substring(0,v.length-1);
                    var t = ['le','les','le','lions','liez','lent']; 
                }
                else if(v.lastIndexOf('soudre')!=-1){
                    v = v.substring(0,v.length-2);
                    var t = ['lve','lves','lve','lvions','livez','lvent'];
                }
                else if(v.lastIndexOf('coudre')!=-1){
                    v = v.substring(0,v.length-1);
                    var t = ['se','ses','se','sions','siez','sent'];
                }
                
            }
			else if (v.lastIndexOf('indre')!=-1){
				 v = v.substring(0,v.length-2);
                 var t = ['gne','gnes','gne','gnions','gniez','gnent'];
			}
            else if (v.lastIndexOf('outre')!=-1){
                v = v.substring(0,v.length-1);
                var t = ['te','tes','te','tions','tiez','tent'];
            }
			else if (v.lastIndexOf('aître')!=-1 || v.lastIndexOf('aitre')!=-1){
                v = v.substring(0,v.length-3);
                var t = ['aisse','aisses','aisse','aissions','aissiez','aissent'];
            }
            else if (v.lastIndexOf('ivre')!=-1){
                v = v.substring(0,v.length-1);
                var t = ['ve','ves','ve','vions','viez','vent'];
            }
            else if (v.lastIndexOf('ire')!=-1){
				if (v == 'dire' || v == 'redire') {
					v = v.substring(0,v.length-1);
					var t = ['ise','ises','ise','isions','isiez','isent'];
				}
				else if (v.lastIndexOf('dire')!=-1) {
					v = v.substring(0,v.length-1);
					var t = ['ise','ises','ise','isions','isiez','isent'];
				}
                else if (v == 'frire') {
                    v = v.substring(0,v.length-3);
                    p = ['','','','-','-','-'];
                    var t = ['','','','','',''];
                }
				else if (v == 'rire') {
                v = v.substring(0,v.length-1);
                var t = ['ie','ies','ie','iions','iiez','ient'];
				}
				else if (v.lastIndexOf('uire')==v.length-4){
				t = ['se','ses','se','sions','siez','sent'];
				}
				else {
				v = v.substring(0,v.length-1);
                var t = ['ise','ise','se','isions','isiez','isent'];
				}
            }
            else if (v.lastIndexOf('tir')!=-1){
				v = v.substring(0,v.length-1);
                var t = ['te','tes','te','tions','tiez','tent'];
            }
            else if (v.lastIndexOf('dre')!=-1){
                var t = ['e','es','e','ions','iez','ent'];
            }
			else if (v == 'etre' || v == 'être'){
				groupe = 'auxiliaire';
				v = v.substring(0,v.length-2);
				p = ['je','tu','il/elle','nous','vous','ils/elles'];
				t = ['sois','sois','soit','soyons','soyez','soient'];
			}
			else if (v.lastIndexOf('eoir')==v.length-4) {
				v = v.substring(0,v.length-2);
				t = ['oie','oies','oie','oyions','oyiez','oient'];
			}
			else if ( v.lastIndexOf('ouloir')!=-1 ) {
				v = v.substring(0,v.length-4);
				t = ['euille','euilles','euille','oulions','ouliez','euillent'];
			}
			else if ( v.lastIndexOf('vir')!=-1) {
				v = v.substring(0,v.length-1);
				t = ['ve','ves','ve','vions','viez','vent'];
			}
			else if (v.lastIndexOf('rmir')!=-1) {
				v = v.substring(0,v.length-1);
				t = ['me','mes','me','mions','miez','ment'];
			}
            else {
                t = ['e','es','e','sions','siez','sent'];
            }
        }
        var que=['Que','Que','Qu\'','Que','Que','Qu\''];
        var r = v.substring(0,v.length-2);
        cadre10.innerHTML = "<u><center>Subjonctif Present </center><br></u>";
		if (v.indexOf('pleuv')!=-1) {
			if (groupe == 3) {
                for(i=0 ; i<5 ; i++){
                    if (i==2){
                        cadre10.innerHTML = cadre10.innerHTML + ('Qu\'' + 'Il'+' '+ 'pleuve'+"<br>");
                    }
                    cadre10.innerHTML = cadre10.innerHTML + '-'+'<br>'
                }
            }
            else if (groupe == 1) {
                for(i=0 ; i<5 ; i++){
                    if (i==2){
                        cadre10.innerHTML = cadre10.innerHTML + ('Qu\'' + 'Il'+' '+ 'pleuvine'+"<br>");
                    }
                    cadre10.innerHTML = cadre10.innerHTML + '-'+'<br>'
                }
            }
		}
        else if (v == 'falloir'){
            for(i=0 ; i<5 ; i++){
                if (i==2){
                    cadre10.innerHTML = cadre10.innerHTML + ('Qu\'' + 'Il'+' '+ 'faille'+"<br>");
                }
                cadre10.innerHTML = cadre10.innerHTML + '-'+'<br>'
            }
        }
		else {
        for(i=0 ; i<6 ; i++) {
		cadre10.innerHTML = cadre10.innerHTML + (que[i] +' ' + p[i]+' '+ r +t[i] +"<br>");
        }
		}
    }

function conjuguer(verb){
    present();
    imparfait();
    passe_simple();
    futur();
    passe_compose();
    plus_que_parfait();
    Conditionnel_present();
    passe_anterieur();
    futur_anterieur();
    subjonctif_present();
}