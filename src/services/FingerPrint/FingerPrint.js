import Fingerprint2 from 'fingerprintjs2';
import DeviceInfo from 'react-native-device-info';
import { Platform } from 'react-native';
import services from '../../../config';

const printf = (that, msg) => that.setState({ outputMsg: `${that.state.outputMsg} \n ${msg}` });

const GetFingerPrint = async () => {
  if (Platform.OS === 'web') {
    return new Promise(
      resolve => new Fingerprint2()
        .get(res => resolve(res)));
  }
  return DeviceInfo.getUniqueID();
};

const RegisterDevice = async (that) => {
  // Busca o serviço
  const service = 'setup';
  const cfg = services.find(srv => srv.nome === service);
  if (!cfg) {
    throw new Error(`Oooops! para o serviço ${service} não foi localizado sua configuração para prosseguir.`);
  }

  // Desconstroi o objeto e monta a URL para o registro.
  const {
    nome, host, version, path
  } = cfg;
  const url = `${host}${version}${path.devices}`;

  // Obter o fingerprint.
  const uuid = await GetFingerPrint();
  printf(that, `Registrando device: "${uuid}"`);

  // Realiza o post de registro.
  const opts = {
    id: uuid,
    platform_device_id: DeviceInfo.getDeviceId(),
    platform_type: Platform.OS,
    platform_properties: {},
    tracking_change_id: '0',
    created_at: '2018-09-19T14:24:30.106Z', // Substituir pelo moment.
    updated_at: '2018-09-19T14:24:30.106Z', // Substituir pelo moment.
    is_active: true
  };

  console.log('opts', opts);
  const response = await fetch(url, {
    method: 'post',
    body: JSON.stringify(opts)
  });

  if (response.ok) {
    const json = await response.json();
    console.log('registro realizado com sucesso.', json);
    return json;
  }
  const err = `Error ao regitra o device: "${nome}"`;
  printf(that, err);
  throw new Error(err);
};

export default RegisterDevice;