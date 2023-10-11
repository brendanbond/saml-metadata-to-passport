import {Args, Command, Flags} from '@oclif/core';
import {MetadataReader, toPassportConfig} from 'passport-saml-metadata';
import {readFileSync, writeFileSync} from 'fs';

export default class Transform extends Command {
  static description = 'Transform SAML metadata to SAML-passport JSON';

  static examples = [
    '$ saml-metadata-to-passport ./src/commands/hello/index.ts',
  ];

  static args = {
    path: Args.string({
      description: 'Path to SAML metadata XML file',
      required: true,
    }),
  };

  async run(): Promise<void> {
    const {args, flags} = await this.parse(Transform);
    const file = readFileSync(args.path, 'utf8');

    const metadata = new MetadataReader(file);
    const passportJson = toPassportConfig(metadata);

    writeFileSync(
      'out.json',
      JSON.stringify(passportJson, null, flags.indent ? 2 : 0)
    );
  }
}
