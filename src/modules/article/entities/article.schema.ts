import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Date, Document } from 'mongoose';
import * as mongoosePaginate from 'mongoose-paginate-v2';


@Schema({ 
    timestamps: false, 
    collation: { locale: 'en', strength: 2 },
    versionKey: false,
})
export class Article extends Document {

    @Prop({ type: String, required: true })
    id: string;

    @Prop({ type: String, required: true })
    name: string;

    @Prop({ type: String, required: true })
    description: string;

    @Prop({ type: Number, required: true })
    price: number;
    
    @Prop({ type: String, required: true })
    model: string;

    @Prop({ type: String })
    updatedAt: string;

    @Prop({ type: String })
    createdAt: string;
}

export const ArticleSchema = SchemaFactory.createForClass( Article );
ArticleSchema.set('toJSON', {
    virtuals: true,
    versionKey:false,
    transform: function (doc, ret) {   delete ret._id  }
});
ArticleSchema.plugin( mongoosePaginate );