<script src="core.js"></script>

## <span style="display:block;text-align:center;"> ![](https://fcasfs-of.cloud-fs.net/Icon/mdpl.png)    Media Player </span>

### <span style="display:block;text-align:center;"> ![](https://fcasfs-of.cloud-fs.net/Icon/en.png)    Search Page </span>

<div class="llk" style="width: 100%;  text-align: center;">
<form class="busca" action="https://fcasfs-of.cloud-fs.net/player/">
  <input type="text" value="" placeholder="ID..." id="textidf" name="fileID"/>
  <label class="container" data-tooltip="Preview" data-flow="top">
    <input type="checkbox" checked="true" valeu="true" name="fileView"/>
    <span class="checkmark"></span></label>
  <label class="range" data-tooltip="Position" data-flow="bottom"><span>  </span>
    <input type="range" min="1" max="99" value="1" name="select" id="fileSelect"/>
    <span class="value" style="color:#000;"></span>
  </label>
  <button type="submit" value="Search">Search</button>
</form>
</div>

<script>
  progressScriptfile("#fileSelect",".value");
</script>

<br/><br/>
