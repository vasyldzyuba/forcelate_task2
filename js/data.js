app.controller('dataCtrl', function ($timeout) {
	let vm = this;

	//First table array
	vm.dataArray = [];
	
	//Working with text inputs for first table 
	vm.callControll = null;
	vm.read = null;
	vm.soundAutoCall = null;
	vm.truck = null;
	vm.origin = null;
	vm.destination = null;
	vm.pickup = null;
	vm.dho = null;
	vm.dhd = null;
	vm.fp = null;
	vm.length = null;
	vm.weigth = null;
	vm.trip = null;
	vm.alarm = null;
	vm.actions = null;

	//Pushing by click an entered data into first array
	vm.pushData = function () {
		//Hiding modal for first table by click
		$('#addModal').modal('hide');
		vm.dataArray.push({
			callControll: vm.callControll,
			read: vm.read,
			soundAutoCall: vm.soundAutoCall,
			truck: vm.truck,
			origin: vm.origin,
			destination: vm.destination,
			pickup: vm.pickup,
			dho: vm.dho,
			dhd: vm.dhd,
			fp: vm.fp,
			length: vm.length,
			weigth: vm.weigth,
			trip: vm.trip,
			alarm: vm.alarm,
			actions: vm.actions
		});

		//Clearing text inputs in first table
		vm.callControll = '';
		vm.read = '';
		vm.soundAutoCall = '';
		vm.truck = '';
		vm.origin = '';
		vm.destination = '';
		vm.pickup = '';
		vm.dho = '';
		vm.dhd = '';
		vm.fp = '';
		vm.length = '';
		vm.weigth = '';
		vm.trip = '';
		vm.alarm = '';
		vm.actions = '';
	}

	//Clear all data from first table
	vm.clearAll = function () {
		vm.dataArray = [];
	}

	//	Second table array
	vm.results = [];

	//Different random data arrays for second table-----------------------------------------start>
	vm.f_t = ['Yes', 'No'];
	vm.age = ['00:01', '00:02', '00:03', '00:04', '00:05', '00:06', '00:07', '00:08', '00:09'];
	vm.avail = ['10/25', '16/24', '13/26', '11/27', '14/30'];
	vm.truckName = ['V', 'VR'];
	vm.truckO = ['Belwood, IL', 'Chicago IL', 'Topeka', 'Leawood', 'New York'];
	vm.f_p = ['F', 'P'];
	vm.origin_2 = ['Erie, PA', 'St. Clair, MI'];
	vm.destination_2 = ['Sealy, TX', 'Orlando, FL'];
	vm.length_2 = ['53 ft', '41 ft', '42 ft', '36 ft', '39 ft'];
	vm.weigth_2 = ['13 klbs', '21 klbs', '52 klbs', '32 klbs', '29 klbs'];
	vm.company = ['Coyote Logistics', 'UTG', 'TankTrans', 'R&R Express', 'AmTrans'];
	vm.phone = ['(096) 443 2322', '(046) 543 2781', '(072) 445 1112', '(476) 853 7445'];
	//---------------------------------------------------------------------------------end<

	//Counting searched results
	vm.count = 0;

	//Pushing by click a random data from different arrays(above) into second array and it is doing it automatically every 10 seconds
	vm.playRandom = function () {
		vm.count++;
		//Timeout for pushing data every 10 seconds
		vm.timeout = $timeout(vm.playRandom, 1000 * 10);
		vm.results.push({
			rate: Math.round(Math.random() * 4000),
			f: vm.f_t[Math.floor(Math.random() * vm.f_t.length)],
			source: 'DAT',
			age: vm.age[Math.floor(Math.random() * vm.age.length)],
			avail: vm.avail[Math.floor(Math.random() * vm.avail.length)],
			truck: vm.truckName[Math.floor(Math.random() * vm.truckName.length)],
			truck_o: vm.truckO[Math.floor(Math.random() * vm.truckO.length)],
			dh_o: Math.floor(Math.random() * 1000),
			f_p: vm.f_p[Math.floor(Math.random() * vm.f_p.length)],
			origin: vm.origin_2[Math.floor(Math.random() * vm.origin_2.length)],
			trip: Math.floor(Math.random() * 1000),
			destination: vm.destination_2[Math.floor(Math.random() * vm.destination_2.length)],
			dh_d: Math.floor(Math.random() * 1000),
			truck_d: Math.floor(Math.random() * 200),
			length: vm.length_2[Math.floor(Math.random() * vm.length_2.length)],
			weigth: vm.weigth_2[Math.floor(Math.random() * vm.weigth_2.length)],
			company: vm.company[Math.floor(Math.random() * vm.company.length)],
			phone: vm.phone[Math.floor(Math.random() * vm.phone.length)]
		});
	}
	//Clear all data and search results from second table and stop timeout 
	vm.clearSecondTable = function () {
		vm.results = [];
		$timeout.cancel(vm.timeout);
		vm.count = 0;
	}
});
