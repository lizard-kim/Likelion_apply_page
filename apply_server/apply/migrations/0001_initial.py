# Generated by Django 3.0.4 on 2020-03-15 15:42

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Apply',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('school_id', models.CharField(max_length=50)),
                ('phone_number', models.CharField(max_length=50)),
                ('email', models.CharField(max_length=50)),
                ('major', models.CharField(max_length=50)),
                ('tech_stack', models.TextField(blank=True, null=True)),
                ('motivation', models.TextField(blank=True, null=True)),
                ('idea', models.TextField(blank=True, null=True)),
            ],
        ),
    ]