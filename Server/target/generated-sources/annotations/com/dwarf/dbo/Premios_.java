package com.dwarf.dbo;

import com.dwarf.dbo.Administrador;
import com.dwarf.dbo.Usuario;
import java.math.BigDecimal;
import javax.annotation.Generated;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value="EclipseLink-2.5.2.v20140319-rNA", date="2018-07-04T21:47:02")
@StaticMetamodel(Premios.class)
public class Premios_ { 

    public static volatile SingularAttribute<Premios, Administrador> administrador;
    public static volatile SingularAttribute<Premios, String> imagem;
    public static volatile SingularAttribute<Premios, BigDecimal> valor;
    public static volatile SingularAttribute<Premios, String> nome;
    public static volatile SingularAttribute<Premios, Usuario> usuario;
    public static volatile SingularAttribute<Premios, Long> id;
    public static volatile SingularAttribute<Premios, String> status;

}