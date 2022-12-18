import { modelOptions, prop, Ref, Severity } from '@typegoose/typegoose';

const DB_TIMESTAMPS_CONFIG = {
    createdAt: 'created_at',
    updatedAt: 'modified_at',
  };


@modelOptions({
  schemaOptions: {
    collection: 'user',
    timestamps: DB_TIMESTAMPS_CONFIG,
  },
  options: { allowMixed: Severity.ALLOW },
})
export class User {
  @prop()
  name: string;

  @prop()
  age: number;
}  

