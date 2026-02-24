 document.documentElement.classList.add('embed');

	var elem = document.getElementById('filemanager');

	var testdiropts = [
		//{ name: 'local', type: 'folder', id: 'folder0', hash: 'folder0' },
	];

	var testfileopts = [
		//{ name: 'Another file.txt', size:1, type: 'file', id: 'file0', hash: 'file0' },
	];

	var imageurlopts = [
	];

	var FormatStr = function(format) {
		var args = Array.prototype.slice.call(arguments, 1);

		return format.replace(/{(\d+)}/g, function(match, number) {
			return (typeof args[number] != 'undefined' ? args[number] : match);
		});
	};

	var GetRandomImageURL = function() {

		var url = imageurlopts[Math.floor(Math.random() * imageurlopts.length)];

		url = FormatStr(url, Math.floor(Math.random() * 300) + 200, Math.floor(Math.random() * 300) + 200);

		return url;
	};

	var options = {

		group: 'demo_group',

		capturebrowser: false,

		initpath: [
			[ '', '(/)', { canmodify: false } ],
		],

		tools: {
			item_checkboxes: false
		},

		onrefresh: function(folder, required) {
		
			if (folder === this.GetCurrentFolder()){
			}

			var newentries = [];

			for (var x = 0; x < testdiropts.length; x++){
				var tempdir = Object.assign({}, testdiropts[Math.floor(Math.random() * testdiropts.length)]);

				tempdir.name = x + ' ' + tempdir.name;
				tempdir.id += '_' + x;
				tempdir.hash += '_' + x;

				newentries.push(tempdir);
			}

			for (var x = 0; x < testfileopts.length; x++){
				var tempfile = Object.assign({}, testfileopts[Math.floor(Math.random() * testfileopts.length)]);

				tempfile.name = x + ' ' + tempfile.name;
				tempfile.id += '_' + x;
				tempfile.hash += '_' + x;
				if (tempfile.thumb)  tempfile.thumb = GetRandomImageURL();

				newentries.push(tempfile);
			}


			if (this.IsMappedFolder(folder))  folder.SetEntries(newentries);
		},

	
	};


	var fe = new window.FileExplorer(elem, options);

