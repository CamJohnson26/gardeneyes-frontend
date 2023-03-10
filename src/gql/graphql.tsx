import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  date: any;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** Boolean expression to compare columns of type "date". All fields are combined with logical 'AND'. */
export type Date_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['date']>;
  _gt?: InputMaybe<Scalars['date']>;
  _gte?: InputMaybe<Scalars['date']>;
  _in?: InputMaybe<Array<Scalars['date']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['date']>;
  _lte?: InputMaybe<Scalars['date']>;
  _neq?: InputMaybe<Scalars['date']>;
  _nin?: InputMaybe<Array<Scalars['date']>>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "plant" */
  delete_plant?: Maybe<Plant_Mutation_Response>;
  /** delete single row from the table: "plant" */
  delete_plant_by_pk?: Maybe<Plant>;
  /** delete data from the table: "planting" */
  delete_planting?: Maybe<Planting_Mutation_Response>;
  /** delete single row from the table: "planting" */
  delete_planting_by_pk?: Maybe<Planting>;
  /** delete data from the table: "section" */
  delete_section?: Maybe<Section_Mutation_Response>;
  /** delete single row from the table: "section" */
  delete_section_by_pk?: Maybe<Section>;
  /** insert data into the table: "plant" */
  insert_plant?: Maybe<Plant_Mutation_Response>;
  /** insert a single row into the table: "plant" */
  insert_plant_one?: Maybe<Plant>;
  /** insert data into the table: "planting" */
  insert_planting?: Maybe<Planting_Mutation_Response>;
  /** insert a single row into the table: "planting" */
  insert_planting_one?: Maybe<Planting>;
  /** insert data into the table: "section" */
  insert_section?: Maybe<Section_Mutation_Response>;
  /** insert a single row into the table: "section" */
  insert_section_one?: Maybe<Section>;
  /** update data of the table: "plant" */
  update_plant?: Maybe<Plant_Mutation_Response>;
  /** update single row of the table: "plant" */
  update_plant_by_pk?: Maybe<Plant>;
  /** update multiples rows of table: "plant" */
  update_plant_many?: Maybe<Array<Maybe<Plant_Mutation_Response>>>;
  /** update data of the table: "planting" */
  update_planting?: Maybe<Planting_Mutation_Response>;
  /** update single row of the table: "planting" */
  update_planting_by_pk?: Maybe<Planting>;
  /** update multiples rows of table: "planting" */
  update_planting_many?: Maybe<Array<Maybe<Planting_Mutation_Response>>>;
  /** update data of the table: "section" */
  update_section?: Maybe<Section_Mutation_Response>;
  /** update single row of the table: "section" */
  update_section_by_pk?: Maybe<Section>;
  /** update multiples rows of table: "section" */
  update_section_many?: Maybe<Array<Maybe<Section_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_PlantArgs = {
  where: Plant_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Plant_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_PlantingArgs = {
  where: Planting_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Planting_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_SectionArgs = {
  where: Section_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Section_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootInsert_PlantArgs = {
  objects: Array<Plant_Insert_Input>;
  on_conflict?: InputMaybe<Plant_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Plant_OneArgs = {
  object: Plant_Insert_Input;
  on_conflict?: InputMaybe<Plant_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_PlantingArgs = {
  objects: Array<Planting_Insert_Input>;
  on_conflict?: InputMaybe<Planting_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Planting_OneArgs = {
  object: Planting_Insert_Input;
  on_conflict?: InputMaybe<Planting_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_SectionArgs = {
  objects: Array<Section_Insert_Input>;
  on_conflict?: InputMaybe<Section_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Section_OneArgs = {
  object: Section_Insert_Input;
  on_conflict?: InputMaybe<Section_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_PlantArgs = {
  _set?: InputMaybe<Plant_Set_Input>;
  where: Plant_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Plant_By_PkArgs = {
  _set?: InputMaybe<Plant_Set_Input>;
  pk_columns: Plant_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Plant_ManyArgs = {
  updates: Array<Plant_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_PlantingArgs = {
  _set?: InputMaybe<Planting_Set_Input>;
  where: Planting_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Planting_By_PkArgs = {
  _set?: InputMaybe<Planting_Set_Input>;
  pk_columns: Planting_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Planting_ManyArgs = {
  updates: Array<Planting_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_SectionArgs = {
  _set?: InputMaybe<Section_Set_Input>;
  where: Section_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Section_By_PkArgs = {
  _set?: InputMaybe<Section_Set_Input>;
  pk_columns: Section_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Section_ManyArgs = {
  updates: Array<Section_Updates>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "plant" */
export type Plant = {
  __typename?: 'plant';
  id: Scalars['String'];
  image: Scalars['String'];
  name: Scalars['String'];
  notes?: Maybe<Scalars['String']>;
};

/** aggregated selection of "plant" */
export type Plant_Aggregate = {
  __typename?: 'plant_aggregate';
  aggregate?: Maybe<Plant_Aggregate_Fields>;
  nodes: Array<Plant>;
};

/** aggregate fields of "plant" */
export type Plant_Aggregate_Fields = {
  __typename?: 'plant_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Plant_Max_Fields>;
  min?: Maybe<Plant_Min_Fields>;
};


/** aggregate fields of "plant" */
export type Plant_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Plant_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "plant". All fields are combined with a logical 'AND'. */
export type Plant_Bool_Exp = {
  _and?: InputMaybe<Array<Plant_Bool_Exp>>;
  _not?: InputMaybe<Plant_Bool_Exp>;
  _or?: InputMaybe<Array<Plant_Bool_Exp>>;
  id?: InputMaybe<String_Comparison_Exp>;
  image?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  notes?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "plant" */
export enum Plant_Constraint {
  /** unique or primary key constraint on columns "name", "id" */
  PlantIdNameKey = 'plant_id_name_key',
  /** unique or primary key constraint on columns "id" */
  PlantPkey = 'plant_pkey'
}

/** input type for inserting data into table "plant" */
export type Plant_Insert_Input = {
  id?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  notes?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Plant_Max_Fields = {
  __typename?: 'plant_max_fields';
  id?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Plant_Min_Fields = {
  __typename?: 'plant_min_fields';
  id?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "plant" */
export type Plant_Mutation_Response = {
  __typename?: 'plant_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Plant>;
};

/** input type for inserting object relation for remote table "plant" */
export type Plant_Obj_Rel_Insert_Input = {
  data: Plant_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Plant_On_Conflict>;
};

/** on_conflict condition type for table "plant" */
export type Plant_On_Conflict = {
  constraint: Plant_Constraint;
  update_columns?: Array<Plant_Update_Column>;
  where?: InputMaybe<Plant_Bool_Exp>;
};

/** Ordering options when selecting data from "plant". */
export type Plant_Order_By = {
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  notes?: InputMaybe<Order_By>;
};

/** primary key columns input for table: plant */
export type Plant_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "plant" */
export enum Plant_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  Name = 'name',
  /** column name */
  Notes = 'notes'
}

/** input type for updating data in table "plant" */
export type Plant_Set_Input = {
  id?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  notes?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "plant" */
export type Plant_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Plant_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Plant_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  notes?: InputMaybe<Scalars['String']>;
};

/** update columns of table "plant" */
export enum Plant_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  Name = 'name',
  /** column name */
  Notes = 'notes'
}

export type Plant_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Plant_Set_Input>;
  where: Plant_Bool_Exp;
};

/** columns and relationships of "planting" */
export type Planting = {
  __typename?: 'planting';
  created_on: Scalars['date'];
  date: Scalars['date'];
  id: Scalars['String'];
  notes?: Maybe<Scalars['String']>;
  plant: Scalars['String'];
  /** An object relationship */
  plantByPlant: Plant;
  section: Scalars['String'];
  /** An object relationship */
  sectionBySection: Section;
};

/** aggregated selection of "planting" */
export type Planting_Aggregate = {
  __typename?: 'planting_aggregate';
  aggregate?: Maybe<Planting_Aggregate_Fields>;
  nodes: Array<Planting>;
};

/** aggregate fields of "planting" */
export type Planting_Aggregate_Fields = {
  __typename?: 'planting_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Planting_Max_Fields>;
  min?: Maybe<Planting_Min_Fields>;
};


/** aggregate fields of "planting" */
export type Planting_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Planting_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "planting". All fields are combined with a logical 'AND'. */
export type Planting_Bool_Exp = {
  _and?: InputMaybe<Array<Planting_Bool_Exp>>;
  _not?: InputMaybe<Planting_Bool_Exp>;
  _or?: InputMaybe<Array<Planting_Bool_Exp>>;
  created_on?: InputMaybe<Date_Comparison_Exp>;
  date?: InputMaybe<Date_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  notes?: InputMaybe<String_Comparison_Exp>;
  plant?: InputMaybe<String_Comparison_Exp>;
  plantByPlant?: InputMaybe<Plant_Bool_Exp>;
  section?: InputMaybe<String_Comparison_Exp>;
  sectionBySection?: InputMaybe<Section_Bool_Exp>;
};

/** unique or primary key constraints on table "planting" */
export enum Planting_Constraint {
  /** unique or primary key constraint on columns "id" */
  PlantingPkey = 'planting_pkey'
}

/** input type for inserting data into table "planting" */
export type Planting_Insert_Input = {
  created_on?: InputMaybe<Scalars['date']>;
  date?: InputMaybe<Scalars['date']>;
  id?: InputMaybe<Scalars['String']>;
  notes?: InputMaybe<Scalars['String']>;
  plant?: InputMaybe<Scalars['String']>;
  plantByPlant?: InputMaybe<Plant_Obj_Rel_Insert_Input>;
  section?: InputMaybe<Scalars['String']>;
  sectionBySection?: InputMaybe<Section_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Planting_Max_Fields = {
  __typename?: 'planting_max_fields';
  created_on?: Maybe<Scalars['date']>;
  date?: Maybe<Scalars['date']>;
  id?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  plant?: Maybe<Scalars['String']>;
  section?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Planting_Min_Fields = {
  __typename?: 'planting_min_fields';
  created_on?: Maybe<Scalars['date']>;
  date?: Maybe<Scalars['date']>;
  id?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  plant?: Maybe<Scalars['String']>;
  section?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "planting" */
export type Planting_Mutation_Response = {
  __typename?: 'planting_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Planting>;
};

/** on_conflict condition type for table "planting" */
export type Planting_On_Conflict = {
  constraint: Planting_Constraint;
  update_columns?: Array<Planting_Update_Column>;
  where?: InputMaybe<Planting_Bool_Exp>;
};

/** Ordering options when selecting data from "planting". */
export type Planting_Order_By = {
  created_on?: InputMaybe<Order_By>;
  date?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  notes?: InputMaybe<Order_By>;
  plant?: InputMaybe<Order_By>;
  plantByPlant?: InputMaybe<Plant_Order_By>;
  section?: InputMaybe<Order_By>;
  sectionBySection?: InputMaybe<Section_Order_By>;
};

/** primary key columns input for table: planting */
export type Planting_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "planting" */
export enum Planting_Select_Column {
  /** column name */
  CreatedOn = 'created_on',
  /** column name */
  Date = 'date',
  /** column name */
  Id = 'id',
  /** column name */
  Notes = 'notes',
  /** column name */
  Plant = 'plant',
  /** column name */
  Section = 'section'
}

/** input type for updating data in table "planting" */
export type Planting_Set_Input = {
  created_on?: InputMaybe<Scalars['date']>;
  date?: InputMaybe<Scalars['date']>;
  id?: InputMaybe<Scalars['String']>;
  notes?: InputMaybe<Scalars['String']>;
  plant?: InputMaybe<Scalars['String']>;
  section?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "planting" */
export type Planting_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Planting_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Planting_Stream_Cursor_Value_Input = {
  created_on?: InputMaybe<Scalars['date']>;
  date?: InputMaybe<Scalars['date']>;
  id?: InputMaybe<Scalars['String']>;
  notes?: InputMaybe<Scalars['String']>;
  plant?: InputMaybe<Scalars['String']>;
  section?: InputMaybe<Scalars['String']>;
};

/** update columns of table "planting" */
export enum Planting_Update_Column {
  /** column name */
  CreatedOn = 'created_on',
  /** column name */
  Date = 'date',
  /** column name */
  Id = 'id',
  /** column name */
  Notes = 'notes',
  /** column name */
  Plant = 'plant',
  /** column name */
  Section = 'section'
}

export type Planting_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Planting_Set_Input>;
  where: Planting_Bool_Exp;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "plant" */
  plant: Array<Plant>;
  /** fetch aggregated fields from the table: "plant" */
  plant_aggregate: Plant_Aggregate;
  /** fetch data from the table: "plant" using primary key columns */
  plant_by_pk?: Maybe<Plant>;
  /** fetch data from the table: "planting" */
  planting: Array<Planting>;
  /** fetch aggregated fields from the table: "planting" */
  planting_aggregate: Planting_Aggregate;
  /** fetch data from the table: "planting" using primary key columns */
  planting_by_pk?: Maybe<Planting>;
  /** fetch data from the table: "section" */
  section: Array<Section>;
  /** fetch aggregated fields from the table: "section" */
  section_aggregate: Section_Aggregate;
  /** fetch data from the table: "section" using primary key columns */
  section_by_pk?: Maybe<Section>;
};


export type Query_RootPlantArgs = {
  distinct_on?: InputMaybe<Array<Plant_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Plant_Order_By>>;
  where?: InputMaybe<Plant_Bool_Exp>;
};


export type Query_RootPlant_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Plant_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Plant_Order_By>>;
  where?: InputMaybe<Plant_Bool_Exp>;
};


export type Query_RootPlant_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootPlantingArgs = {
  distinct_on?: InputMaybe<Array<Planting_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Planting_Order_By>>;
  where?: InputMaybe<Planting_Bool_Exp>;
};


export type Query_RootPlanting_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Planting_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Planting_Order_By>>;
  where?: InputMaybe<Planting_Bool_Exp>;
};


export type Query_RootPlanting_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootSectionArgs = {
  distinct_on?: InputMaybe<Array<Section_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Section_Order_By>>;
  where?: InputMaybe<Section_Bool_Exp>;
};


export type Query_RootSection_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Section_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Section_Order_By>>;
  where?: InputMaybe<Section_Bool_Exp>;
};


export type Query_RootSection_By_PkArgs = {
  id: Scalars['String'];
};

/** columns and relationships of "section" */
export type Section = {
  __typename?: 'section';
  id: Scalars['String'];
  name: Scalars['String'];
  notes?: Maybe<Scalars['String']>;
};

/** aggregated selection of "section" */
export type Section_Aggregate = {
  __typename?: 'section_aggregate';
  aggregate?: Maybe<Section_Aggregate_Fields>;
  nodes: Array<Section>;
};

/** aggregate fields of "section" */
export type Section_Aggregate_Fields = {
  __typename?: 'section_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Section_Max_Fields>;
  min?: Maybe<Section_Min_Fields>;
};


/** aggregate fields of "section" */
export type Section_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Section_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "section". All fields are combined with a logical 'AND'. */
export type Section_Bool_Exp = {
  _and?: InputMaybe<Array<Section_Bool_Exp>>;
  _not?: InputMaybe<Section_Bool_Exp>;
  _or?: InputMaybe<Array<Section_Bool_Exp>>;
  id?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  notes?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "section" */
export enum Section_Constraint {
  /** unique or primary key constraint on columns "name", "id" */
  SectionIdNameKey = 'section_id_name_key',
  /** unique or primary key constraint on columns "id" */
  SectionPkey = 'section_pkey'
}

/** input type for inserting data into table "section" */
export type Section_Insert_Input = {
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  notes?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Section_Max_Fields = {
  __typename?: 'section_max_fields';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Section_Min_Fields = {
  __typename?: 'section_min_fields';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "section" */
export type Section_Mutation_Response = {
  __typename?: 'section_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Section>;
};

/** input type for inserting object relation for remote table "section" */
export type Section_Obj_Rel_Insert_Input = {
  data: Section_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Section_On_Conflict>;
};

/** on_conflict condition type for table "section" */
export type Section_On_Conflict = {
  constraint: Section_Constraint;
  update_columns?: Array<Section_Update_Column>;
  where?: InputMaybe<Section_Bool_Exp>;
};

/** Ordering options when selecting data from "section". */
export type Section_Order_By = {
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  notes?: InputMaybe<Order_By>;
};

/** primary key columns input for table: section */
export type Section_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "section" */
export enum Section_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Notes = 'notes'
}

/** input type for updating data in table "section" */
export type Section_Set_Input = {
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  notes?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "section" */
export type Section_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Section_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Section_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  notes?: InputMaybe<Scalars['String']>;
};

/** update columns of table "section" */
export enum Section_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Notes = 'notes'
}

export type Section_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Section_Set_Input>;
  where: Section_Bool_Exp;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "plant" */
  plant: Array<Plant>;
  /** fetch aggregated fields from the table: "plant" */
  plant_aggregate: Plant_Aggregate;
  /** fetch data from the table: "plant" using primary key columns */
  plant_by_pk?: Maybe<Plant>;
  /** fetch data from the table in a streaming manner: "plant" */
  plant_stream: Array<Plant>;
  /** fetch data from the table: "planting" */
  planting: Array<Planting>;
  /** fetch aggregated fields from the table: "planting" */
  planting_aggregate: Planting_Aggregate;
  /** fetch data from the table: "planting" using primary key columns */
  planting_by_pk?: Maybe<Planting>;
  /** fetch data from the table in a streaming manner: "planting" */
  planting_stream: Array<Planting>;
  /** fetch data from the table: "section" */
  section: Array<Section>;
  /** fetch aggregated fields from the table: "section" */
  section_aggregate: Section_Aggregate;
  /** fetch data from the table: "section" using primary key columns */
  section_by_pk?: Maybe<Section>;
  /** fetch data from the table in a streaming manner: "section" */
  section_stream: Array<Section>;
};


export type Subscription_RootPlantArgs = {
  distinct_on?: InputMaybe<Array<Plant_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Plant_Order_By>>;
  where?: InputMaybe<Plant_Bool_Exp>;
};


export type Subscription_RootPlant_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Plant_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Plant_Order_By>>;
  where?: InputMaybe<Plant_Bool_Exp>;
};


export type Subscription_RootPlant_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootPlant_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Plant_Stream_Cursor_Input>>;
  where?: InputMaybe<Plant_Bool_Exp>;
};


export type Subscription_RootPlantingArgs = {
  distinct_on?: InputMaybe<Array<Planting_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Planting_Order_By>>;
  where?: InputMaybe<Planting_Bool_Exp>;
};


export type Subscription_RootPlanting_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Planting_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Planting_Order_By>>;
  where?: InputMaybe<Planting_Bool_Exp>;
};


export type Subscription_RootPlanting_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootPlanting_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Planting_Stream_Cursor_Input>>;
  where?: InputMaybe<Planting_Bool_Exp>;
};


export type Subscription_RootSectionArgs = {
  distinct_on?: InputMaybe<Array<Section_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Section_Order_By>>;
  where?: InputMaybe<Section_Bool_Exp>;
};


export type Subscription_RootSection_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Section_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Section_Order_By>>;
  where?: InputMaybe<Section_Bool_Exp>;
};


export type Subscription_RootSection_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootSection_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Section_Stream_Cursor_Input>>;
  where?: InputMaybe<Section_Bool_Exp>;
};

export type DeletePlantMutationVariables = Exact<{
  id?: InputMaybe<Scalars['String']>;
}>;


export type DeletePlantMutation = { __typename?: 'mutation_root', delete_plant_by_pk?: { __typename?: 'plant', id: string } | null };

export type InsertPlantMutationVariables = Exact<{
  name?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
}>;


export type InsertPlantMutation = { __typename?: 'mutation_root', insert_plant_one?: { __typename: 'plant', id: string, name: string } | null };

export type DeletePlantingMutationVariables = Exact<{
  id?: InputMaybe<Scalars['String']>;
}>;


export type DeletePlantingMutation = { __typename?: 'mutation_root', delete_planting_by_pk?: { __typename?: 'planting', id: string } | null };

export type InsertPlantingMutationVariables = Exact<{
  date?: InputMaybe<Scalars['date']>;
  plant?: InputMaybe<Scalars['String']>;
  section?: InputMaybe<Scalars['String']>;
  notes?: InputMaybe<Scalars['String']>;
}>;


export type InsertPlantingMutation = { __typename?: 'mutation_root', insert_planting_one?: { __typename?: 'planting', id: string } | null };

export type PlantingQueryVariables = Exact<{ [key: string]: never; }>;


export type PlantingQuery = { __typename?: 'query_root', planting: Array<{ __typename?: 'planting', created_on: any, date: any, id: string, notes?: string | null, plantByPlant: { __typename?: 'plant', id: string, image: string, name: string }, sectionBySection: { __typename?: 'section', id: string, name: string } }> };

export type DeleteSectionMutationVariables = Exact<{
  id?: InputMaybe<Scalars['String']>;
}>;


export type DeleteSectionMutation = { __typename?: 'mutation_root', delete_section_by_pk?: { __typename?: 'section', id: string } | null };

export type InsertSectionMutationVariables = Exact<{
  name?: InputMaybe<Scalars['String']>;
  notes?: InputMaybe<Scalars['String']>;
}>;


export type InsertSectionMutation = { __typename?: 'mutation_root', insert_section_one?: { __typename: 'section', id: string, name: string } | null };

export type SectionQueryVariables = Exact<{ [key: string]: never; }>;


export type SectionQuery = { __typename?: 'query_root', section: Array<{ __typename: 'section', id: string, name: string, notes?: string | null }> };

export type PlantQueryVariables = Exact<{ [key: string]: never; }>;


export type PlantQuery = { __typename?: 'query_root', plant: Array<{ __typename: 'plant', id: string, name: string, image: string }> };


export const DeletePlantDocument = gql`
    mutation DeletePlant($id: String = "") {
  delete_plant_by_pk(id: $id) {
    id
  }
}
    `;
export type DeletePlantMutationFn = Apollo.MutationFunction<DeletePlantMutation, DeletePlantMutationVariables>;

/**
 * __useDeletePlantMutation__
 *
 * To run a mutation, you first call `useDeletePlantMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeletePlantMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deletePlantMutation, { data, loading, error }] = useDeletePlantMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeletePlantMutation(baseOptions?: Apollo.MutationHookOptions<DeletePlantMutation, DeletePlantMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeletePlantMutation, DeletePlantMutationVariables>(DeletePlantDocument, options);
      }
export type DeletePlantMutationHookResult = ReturnType<typeof useDeletePlantMutation>;
export type DeletePlantMutationResult = Apollo.MutationResult<DeletePlantMutation>;
export type DeletePlantMutationOptions = Apollo.BaseMutationOptions<DeletePlantMutation, DeletePlantMutationVariables>;
export const InsertPlantDocument = gql`
    mutation InsertPlant($name: String = "", $image: String = "") {
  insert_plant_one(object: {image: $image, name: $name}) {
    __typename
    id
    name
  }
}
    `;
export type InsertPlantMutationFn = Apollo.MutationFunction<InsertPlantMutation, InsertPlantMutationVariables>;

/**
 * __useInsertPlantMutation__
 *
 * To run a mutation, you first call `useInsertPlantMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertPlantMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertPlantMutation, { data, loading, error }] = useInsertPlantMutation({
 *   variables: {
 *      name: // value for 'name'
 *      image: // value for 'image'
 *   },
 * });
 */
export function useInsertPlantMutation(baseOptions?: Apollo.MutationHookOptions<InsertPlantMutation, InsertPlantMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InsertPlantMutation, InsertPlantMutationVariables>(InsertPlantDocument, options);
      }
export type InsertPlantMutationHookResult = ReturnType<typeof useInsertPlantMutation>;
export type InsertPlantMutationResult = Apollo.MutationResult<InsertPlantMutation>;
export type InsertPlantMutationOptions = Apollo.BaseMutationOptions<InsertPlantMutation, InsertPlantMutationVariables>;
export const DeletePlantingDocument = gql`
    mutation DeletePlanting($id: String = "") {
  delete_planting_by_pk(id: $id) {
    id
  }
}
    `;
export type DeletePlantingMutationFn = Apollo.MutationFunction<DeletePlantingMutation, DeletePlantingMutationVariables>;

/**
 * __useDeletePlantingMutation__
 *
 * To run a mutation, you first call `useDeletePlantingMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeletePlantingMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deletePlantingMutation, { data, loading, error }] = useDeletePlantingMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeletePlantingMutation(baseOptions?: Apollo.MutationHookOptions<DeletePlantingMutation, DeletePlantingMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeletePlantingMutation, DeletePlantingMutationVariables>(DeletePlantingDocument, options);
      }
export type DeletePlantingMutationHookResult = ReturnType<typeof useDeletePlantingMutation>;
export type DeletePlantingMutationResult = Apollo.MutationResult<DeletePlantingMutation>;
export type DeletePlantingMutationOptions = Apollo.BaseMutationOptions<DeletePlantingMutation, DeletePlantingMutationVariables>;
export const InsertPlantingDocument = gql`
    mutation InsertPlanting($date: date = "", $plant: String = "", $section: String = "", $notes: String = "") {
  insert_planting_one(
    object: {date: $date, plant: $plant, section: $section, notes: $notes}
  ) {
    id
  }
}
    `;
export type InsertPlantingMutationFn = Apollo.MutationFunction<InsertPlantingMutation, InsertPlantingMutationVariables>;

/**
 * __useInsertPlantingMutation__
 *
 * To run a mutation, you first call `useInsertPlantingMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertPlantingMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertPlantingMutation, { data, loading, error }] = useInsertPlantingMutation({
 *   variables: {
 *      date: // value for 'date'
 *      plant: // value for 'plant'
 *      section: // value for 'section'
 *      notes: // value for 'notes'
 *   },
 * });
 */
export function useInsertPlantingMutation(baseOptions?: Apollo.MutationHookOptions<InsertPlantingMutation, InsertPlantingMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InsertPlantingMutation, InsertPlantingMutationVariables>(InsertPlantingDocument, options);
      }
export type InsertPlantingMutationHookResult = ReturnType<typeof useInsertPlantingMutation>;
export type InsertPlantingMutationResult = Apollo.MutationResult<InsertPlantingMutation>;
export type InsertPlantingMutationOptions = Apollo.BaseMutationOptions<InsertPlantingMutation, InsertPlantingMutationVariables>;
export const PlantingDocument = gql`
    query Planting {
  planting {
    created_on
    date
    id
    notes
    plantByPlant {
      id
      image
      name
    }
    sectionBySection {
      id
      name
    }
  }
}
    `;

/**
 * __usePlantingQuery__
 *
 * To run a query within a React component, call `usePlantingQuery` and pass it any options that fit your needs.
 * When your component renders, `usePlantingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePlantingQuery({
 *   variables: {
 *   },
 * });
 */
export function usePlantingQuery(baseOptions?: Apollo.QueryHookOptions<PlantingQuery, PlantingQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PlantingQuery, PlantingQueryVariables>(PlantingDocument, options);
      }
export function usePlantingLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PlantingQuery, PlantingQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PlantingQuery, PlantingQueryVariables>(PlantingDocument, options);
        }
export type PlantingQueryHookResult = ReturnType<typeof usePlantingQuery>;
export type PlantingLazyQueryHookResult = ReturnType<typeof usePlantingLazyQuery>;
export type PlantingQueryResult = Apollo.QueryResult<PlantingQuery, PlantingQueryVariables>;
export const DeleteSectionDocument = gql`
    mutation DeleteSection($id: String = "") {
  delete_section_by_pk(id: $id) {
    id
  }
}
    `;
export type DeleteSectionMutationFn = Apollo.MutationFunction<DeleteSectionMutation, DeleteSectionMutationVariables>;

/**
 * __useDeleteSectionMutation__
 *
 * To run a mutation, you first call `useDeleteSectionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteSectionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteSectionMutation, { data, loading, error }] = useDeleteSectionMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteSectionMutation(baseOptions?: Apollo.MutationHookOptions<DeleteSectionMutation, DeleteSectionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteSectionMutation, DeleteSectionMutationVariables>(DeleteSectionDocument, options);
      }
export type DeleteSectionMutationHookResult = ReturnType<typeof useDeleteSectionMutation>;
export type DeleteSectionMutationResult = Apollo.MutationResult<DeleteSectionMutation>;
export type DeleteSectionMutationOptions = Apollo.BaseMutationOptions<DeleteSectionMutation, DeleteSectionMutationVariables>;
export const InsertSectionDocument = gql`
    mutation InsertSection($name: String = "", $notes: String = "") {
  insert_section_one(object: {name: $name, notes: $notes}) {
    __typename
    id
    name
  }
}
    `;
export type InsertSectionMutationFn = Apollo.MutationFunction<InsertSectionMutation, InsertSectionMutationVariables>;

/**
 * __useInsertSectionMutation__
 *
 * To run a mutation, you first call `useInsertSectionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertSectionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertSectionMutation, { data, loading, error }] = useInsertSectionMutation({
 *   variables: {
 *      name: // value for 'name'
 *      notes: // value for 'notes'
 *   },
 * });
 */
export function useInsertSectionMutation(baseOptions?: Apollo.MutationHookOptions<InsertSectionMutation, InsertSectionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InsertSectionMutation, InsertSectionMutationVariables>(InsertSectionDocument, options);
      }
export type InsertSectionMutationHookResult = ReturnType<typeof useInsertSectionMutation>;
export type InsertSectionMutationResult = Apollo.MutationResult<InsertSectionMutation>;
export type InsertSectionMutationOptions = Apollo.BaseMutationOptions<InsertSectionMutation, InsertSectionMutationVariables>;
export const SectionDocument = gql`
    query Section {
  section {
    __typename
    id
    name
    notes
  }
}
    `;

/**
 * __useSectionQuery__
 *
 * To run a query within a React component, call `useSectionQuery` and pass it any options that fit your needs.
 * When your component renders, `useSectionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSectionQuery({
 *   variables: {
 *   },
 * });
 */
export function useSectionQuery(baseOptions?: Apollo.QueryHookOptions<SectionQuery, SectionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SectionQuery, SectionQueryVariables>(SectionDocument, options);
      }
export function useSectionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SectionQuery, SectionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SectionQuery, SectionQueryVariables>(SectionDocument, options);
        }
export type SectionQueryHookResult = ReturnType<typeof useSectionQuery>;
export type SectionLazyQueryHookResult = ReturnType<typeof useSectionLazyQuery>;
export type SectionQueryResult = Apollo.QueryResult<SectionQuery, SectionQueryVariables>;
export const PlantDocument = gql`
    query Plant {
  plant {
    __typename
    id
    name
    image
  }
}
    `;

/**
 * __usePlantQuery__
 *
 * To run a query within a React component, call `usePlantQuery` and pass it any options that fit your needs.
 * When your component renders, `usePlantQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePlantQuery({
 *   variables: {
 *   },
 * });
 */
export function usePlantQuery(baseOptions?: Apollo.QueryHookOptions<PlantQuery, PlantQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PlantQuery, PlantQueryVariables>(PlantDocument, options);
      }
export function usePlantLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PlantQuery, PlantQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PlantQuery, PlantQueryVariables>(PlantDocument, options);
        }
export type PlantQueryHookResult = ReturnType<typeof usePlantQuery>;
export type PlantLazyQueryHookResult = ReturnType<typeof usePlantLazyQuery>;
export type PlantQueryResult = Apollo.QueryResult<PlantQuery, PlantQueryVariables>;