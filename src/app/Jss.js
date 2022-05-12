import jss from "jss";
import preset from "jss-preset-default";
import jssPluginVendorPrefixer from 'jss-plugin-vendor-prefixer';


const Jss = () => {
    jss.setup(preset());
    jss.use(jssPluginVendorPrefixer());
} 

export default Jss;