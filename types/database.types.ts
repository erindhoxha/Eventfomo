import { Database as GeneratedDatabase } from '@/database.generated.types';

export type Tables<T extends keyof GeneratedDatabase['public']['Tables']> =
 GeneratedDatabase['public']['Tables'][T]['Row'];
export type Enums<T extends keyof GeneratedDatabase['public']['Enums']> =
 GeneratedDatabase['public']['Enums'][T];
