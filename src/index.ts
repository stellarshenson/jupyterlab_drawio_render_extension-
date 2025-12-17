import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { requestAPI } from './request';

/**
 * Initialization data for the jupyterlab_drawio_render_extension extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'jupyterlab_drawio_render_extension:plugin',
  description: 'Jupyterlab extension to just render the drawio diagram (viewer in Jupyterlab)',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension jupyterlab_drawio_render_extension is activated!');

    requestAPI<any>('hello')
      .then(data => {
        console.log(data);
      })
      .catch(reason => {
        console.error(
          `The jupyterlab_drawio_render_extension server extension appears to be missing.\n${reason}`
        );
      });
  }
};

export default plugin;
