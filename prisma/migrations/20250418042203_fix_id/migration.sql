-- AlterTable
CREATE SEQUENCE garden_id_seq;
ALTER TABLE "Garden" ALTER COLUMN "id" SET DEFAULT nextval('garden_id_seq');
ALTER SEQUENCE garden_id_seq OWNED BY "Garden"."id";

-- AlterTable
CREATE SEQUENCE sale_id_seq;
ALTER TABLE "Sale" ALTER COLUMN "id" SET DEFAULT nextval('sale_id_seq');
ALTER SEQUENCE sale_id_seq OWNED BY "Sale"."id";

-- AlterTable
CREATE SEQUENCE sensordata_id_seq;
ALTER TABLE "SensorData" ALTER COLUMN "id" SET DEFAULT nextval('sensordata_id_seq');
ALTER SEQUENCE sensordata_id_seq OWNED BY "SensorData"."id";

-- AlterTable
CREATE SEQUENCE vegetable_id_seq;
ALTER TABLE "Vegetable" ALTER COLUMN "id" SET DEFAULT nextval('vegetable_id_seq');
ALTER SEQUENCE vegetable_id_seq OWNED BY "Vegetable"."id";
