import { Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity('shorteners')
class Shortener {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    url: string;

    @Column()
    code: string;

    @Column()
    expires: string;

}

export default Shortener;