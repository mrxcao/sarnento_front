// eslint-disable-next-line import/no-extraneous-dependencies
import { Client } from 'basic-ftp';
import dotenv from 'dotenv';

dotenv.config();

const host = process.env.VITE_FTP_HOST;
const user = process.env.VITE_FTP_USER;
const password = process.env.VITE_FTP_PASSWORD;
const destino = process.env.VITE_FTP_FOLDER;
console.log('destino', destino);

const cleanAndUploadFiles = async () => {
  const client = new Client();
  client.ftp.verbose = true;

  try {
    console.log('-------- Iniciou');
    await client.access({
      host,
      user,
      password,
      secure: false,
    });
    console.log('-------- conectou');
    // const c = await client.clearWorkingDir(destino);
    // const c = await client.clearWorkingDir(destino);
    // '/sarnento.app.br/img/sar3.jpeg';
    //    console.log('c', c);
    const d = await client.uploadFromDir('dist/', destino);
    console.log('d', d);
    console.log('Arquivos enviados com sucesso!');
  } catch (err) {
    console.error('Erro ao enviar arquivos:', err);
  } finally {
    client.close();
  }
};

cleanAndUploadFiles();
