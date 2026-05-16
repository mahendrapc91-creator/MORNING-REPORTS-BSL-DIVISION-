console.log("BSL Operating Branch Dashboard Loaded Successfully");

function showPanel(id, btn){
	// hide all panels
	document.querySelectorAll('.panel').forEach(p=>p.classList.remove('active'));
	// activate selected panel
	const panel = document.getElementById(id);
	if(panel) panel.classList.add('active');

	// update sidebar active state
	document.querySelectorAll('.menu-btn').forEach(b=>b.classList.remove('active'));
	if(btn) btn.classList.add('active');
}

function toggleCategory(catEl){
	if(!catEl) return;
	catEl.classList.toggle('active');
}